"use client";

import { Provider } from "react-redux";
import { store } from "../../store/store";
import { ProvidersProps } from "../../types/types";

export function Providers({ children }: ProvidersProps) {
  return <Provider store={store}>{children}</Provider>;
}
