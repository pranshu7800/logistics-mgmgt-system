import { Data } from "./Data";

interface PopupProps {
    open: boolean;
    toggle: (state: boolean) => void;
    shipment: Data
}

export type { PopupProps };