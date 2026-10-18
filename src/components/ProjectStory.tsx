import type { ComponentType } from "react";
import { getProject } from "@/data/projects";
import GenericCase from "./case/GenericCase";
import AutoStory from "./stories/AutoStory";
import AyanStory from "./stories/AyanStory";
import DivanStory from "./stories/DivanStory";
import FdsStory from "./stories/FdsStory";
import QueenStory from "./stories/QueenStory";
import TasshilaStory from "./stories/TasshilaStory";
import VeloStory from "./stories/VeloStory";
import WassalniStory from "./stories/WassalniStory";

/** Projects with a hand-drawn story. The others use the data-driven case study. */
export const illustrated: Record<string, ComponentType> = {
  fds: FdsStory,
  velo: VeloStory,
  tasshila: TasshilaStory,
  auto: AutoStory,
  divan: DivanStory,
  mobile: WassalniStory,
  queen: QueenStory,
  ayan: AyanStory,
};

export default function ProjectStory({ slug }: { slug: string }) {
  const Story = illustrated[slug];
  if (Story) return <Story />;
  const p = getProject(slug);
  return p ? <GenericCase p={p} /> : null;
}
