"use client";

import { useEffect, useRef } from "react";
import type { Map as LeafletMap } from "leaflet";

type ForumJourneyMapProps = {
  locale: "en" | "zh-cn";
};

const AI_VF_VENUE: [number, number] = [22.31496, 113.60371];
const GOSIM_VENUE: [number, number] = [22.4872234, 113.9064244];

const COACH_ROUTE: [number, number][] = [
  AI_VF_VENUE,
  [22.371, 113.576],
  [22.452, 113.55],
  [22.535, 113.563],
  [22.575, 113.64],
  [22.572, 113.735],
  [22.562, 113.832],
  [22.526, 113.892],
  GOSIM_VENUE,
];

const COACH_MARKER_POSITION: [number, number] = [22.572, 113.735];

export function ForumJourneyMap({ locale }: ForumJourneyMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    let cancelled = false;

    void import("leaflet").then((L) => {
      if (cancelled || !containerRef.current || mapRef.current) return;

      const copy = locale === "zh-cn"
        ? {
            aria: "OpenStreetMap 地图：AI 愿景论坛于 10 月 14 至 15 日在珠海举行，闭幕后由会务大巴送参会嘉宾前往 GOSIM Shenzhen 2026 会场。",
            zhuhai: "珠海 · 10 月 14–15 日",
            shenzhen: "深圳 · 10 月 16–17 日",
            route: "15 日闭幕后 · 会务大巴接驳",
            cities: ["珠海", "澳门", "深圳", "香港"],
          }
        : {
            aria: "OpenStreetMap showing AI Vision Forum in Zhuhai and the conference coach route to the GOSIM Shenzhen 2026 venue after the forum closes on October 15.",
            zhuhai: "Zhuhai · 14–15 October",
            shenzhen: "Shenzhen · 16–17 October",
            route: "Conference coach · 15 Oct",
            cities: ["Zhuhai", "Macao", "Shenzhen", "Hong Kong"],
          };

      const map = L.map(containerRef.current, {
        attributionControl: true,
        doubleClickZoom: true,
        scrollWheelZoom: false,
        zoomSnap: 0.25,
        zoomControl: true,
      });
      mapRef.current = map;

      L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        maxZoom: 19,
      }).addTo(map);

      const cityLabels: [[number, number], string][] = [
        [[22.2707, 113.5767], copy.cities[0]],
        [[22.1987, 113.5439], copy.cities[1]],
        [[22.5431, 114.0579], copy.cities[2]],
        [[22.3193, 114.1694], copy.cities[3]],
      ];

      cityLabels.forEach(([position, label]) => {
        L.tooltip({
          className: "forum-city-label",
          direction: "center",
          interactive: false,
          opacity: 1,
          permanent: true,
        })
          .setLatLng(position)
          .setContent(label)
          .addTo(map);
      });

      const aiVfMarker = L.circleMarker(AI_VF_VENUE, {
        className: "forum-map-point forum-map-point-ai",
        color: "#147b96",
        fillColor: "#f7fbfd",
        fillOpacity: 1,
        radius: 8,
        weight: 4,
      }).addTo(map);

      aiVfMarker.bindTooltip(
        `<strong>AI VF</strong><span>${copy.zhuhai}</span>`,
        {
          className: "forum-map-tooltip forum-map-tooltip-ai",
          direction: "left",
          offset: [-12, 0],
          opacity: 1,
          permanent: true,
        },
      );

      const gosimMarker = L.circleMarker(GOSIM_VENUE, {
        className: "forum-map-point forum-map-point-gosim",
        color: "#ad5144",
        fillColor: "#f7fbfd",
        fillOpacity: 1,
        radius: 8,
        weight: 4,
      }).addTo(map);

      gosimMarker.bindTooltip(
        `<strong>GOSIM</strong><span>${copy.shenzhen}</span>`,
        {
          className: "forum-map-tooltip forum-map-tooltip-gosim",
          direction: "right",
          offset: [12, 0],
          opacity: 1,
          permanent: true,
        },
      );

      L.polyline(COACH_ROUTE, {
        className: "forum-map-coach-route-casing",
        color: "#f7fbfd",
        lineCap: "round",
        opacity: 0.92,
        weight: 8,
      }).addTo(map);

      const route = L.polyline(COACH_ROUTE, {
        className: "forum-map-coach-route",
        color: "#ad5144",
        lineCap: "round",
        opacity: 0.96,
        weight: 4,
      }).addTo(map);

      route.bindTooltip(copy.route, {
        className: "forum-map-route-tooltip",
        direction: "top",
        offset: [0, -18],
        opacity: 1,
        permanent: true,
      });

      const coachIcon = L.divIcon({
        className: "forum-map-coach-marker",
        html: '<span class="forum-map-coach-body">BUS</span>',
        iconAnchor: [23, 15],
        iconSize: [46, 30],
      });

      L.marker(COACH_MARKER_POSITION, {
        icon: coachIcon,
        interactive: false,
        keyboard: false,
      }).addTo(map);

      const compactViewport = containerRef.current.clientWidth < 640;
      map.setView(
        compactViewport ? [22.44, 113.75] : [22.43, 113.79],
        compactViewport ? 9.25 : 9.75,
        { animate: false },
      );
    });

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [locale]);

  const ariaLabel = locale === "zh-cn"
    ? "珠海至 GOSIM Shenzhen 2026 会场的大巴接驳地图"
    : "Conference coach route from Zhuhai to the GOSIM Shenzhen 2026 venue";

  return (
    <div className="forum-journey-map" role="group" aria-label={ariaLabel}>
      <div ref={containerRef} className="forum-leaflet-map" />
    </div>
  );
}
