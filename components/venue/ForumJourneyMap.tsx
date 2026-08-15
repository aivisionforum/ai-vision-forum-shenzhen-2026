"use client";

import { useEffect, useRef } from "react";
import type { Map as LeafletMap } from "leaflet";

type ForumJourneyMapProps = {
  locale: "en" | "zh-cn";
};

const AI_VF_VENUE: [number, number] = [22.31496, 113.60371];
const GOSIM_VENUE: [number, number] = [22.4872234, 113.9064244];

const TRANSFER_ROUTE: [number, number][] = [
  AI_VF_VENUE,
  [22.319, 113.664],
  [22.337, 113.724],
  [22.372, 113.785],
  [22.421, 113.844],
  GOSIM_VENUE,
];

export function ForumJourneyMap({ locale }: ForumJourneyMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    let cancelled = false;

    void import("leaflet").then((L) => {
      if (cancelled || !containerRef.current || mapRef.current) return;

      const copy = locale === "zh-cn"
        ? {
            aria: "OpenStreetMap 地图：AI Vision Forum 于 10 月 14 至 15 日在珠海举行，闭幕后乘船前往深圳参加 GOSIM。",
            zhuhai: "珠海 · 10 月 14–15 日",
            shenzhen: "深圳 · 10 月 16–17 日",
            route: "15 日闭幕后乘船前往深圳",
            cities: ["珠海", "澳门", "深圳", "香港"],
          }
        : {
            aria: "OpenStreetMap showing AI Vision Forum in Zhuhai and the boat transfer to GOSIM in Shenzhen after the forum closes on October 15.",
            zhuhai: "Zhuhai · 14–15 October",
            shenzhen: "Shenzhen · 16–17 October",
            route: "Boat transfer after the forum · 15 Oct",
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

      const route = L.polyline(TRANSFER_ROUTE, {
        className: "forum-map-transfer-line",
        color: "#ad5144",
        dashArray: "9 12",
        lineCap: "round",
        opacity: 0.9,
        weight: 3,
      }).addTo(map);

      route.bindTooltip(copy.route, {
        className: "forum-map-route-tooltip",
        direction: "center",
        opacity: 1,
        permanent: true,
      });

      const compactViewport = containerRef.current.clientWidth < 640;
      map.setView(
        compactViewport ? [22.37, 113.77] : [22.37, 113.8],
        compactViewport ? 9.5 : 10.25,
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
    ? "珠海至深圳活动行程地图"
    : "Forum journey map from Zhuhai to Shenzhen";

  return (
    <div className="forum-journey-map" role="group" aria-label={ariaLabel}>
      <div ref={containerRef} className="forum-leaflet-map" />
    </div>
  );
}
