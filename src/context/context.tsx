import { ReactNode, useState } from "react";
import { IconContext } from "./iconContext";
import type { IconProps } from "@/App";
import { Icons } from "@/lib/icons";
import { useHistoryState } from "@uidotdev/usehooks";

const DEFAULT_ICON: IconProps = {
	id: crypto.randomUUID(),
	primaryBgColor: "#7692bc",
	secondaryBgColor: "#0c1118",
	radialGlare: false,
	bgColorType: "RadialGradient",
	angle: 0,
	radius: 32,
	strokeWidth: 2,
	strokeColor: "#ffffff",
	noiseTexture: false,
	noiseOpacity: 0,
	iconName: "Bike",
	iconSize: 400,
	color: "#ffffff",
	xOffset: 0,
	yOffset: 0,
};

export const IconProvider = ({ children }: { children: ReactNode }) => {
	const [svgElement, setSvgElement] = useState<SVGSVGElement | null>(null);
	const [lastIcons, setLastIcons] = useState<IconProps[]>([]);
	// @ts-ignore
	const [importedIcons, setImportedIcons] = useState<Icons>({});

	const {
		state: icon,
		set: setIcon,
		undo: undoIcon,
		redo: redoIcon,
		canUndo,
		canRedo,
	} = useHistoryState<IconProps>(DEFAULT_ICON);

	const undo = () => {
		undoIcon();
	};

	const redo = () => {
		redoIcon();
	};

	return (
		<IconContext.Provider
			value={{
				icon,
				setIcon,
				undo,
				redo,
				canUndo,
				canRedo,
				svgElement,
				setSvgElement,
				lastIcons,
				setLastIcons,
				importedIcons,
				setImportedIcons,
			}}
		>
			{children}
		</IconContext.Provider>
	);
};
