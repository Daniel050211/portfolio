"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

function getModKeyLabel() {
  return /Mac|iPhone|iPad|iPod/.test(navigator.userAgent) ? "⌘" : "Ctrl";
}

export function useModKeyLabel() {
  return useSyncExternalStore(emptySubscribe, getModKeyLabel, () => "⌘");
}
