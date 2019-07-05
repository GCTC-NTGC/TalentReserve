import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import ProgressTrackerItem from "../../components/ProgressTracker/ProgressTrackerItem";
import ProgressTracker from "../../components/ProgressTracker/ProgressTracker";

const ProgressTrackerWrapper = (
  children: React.ReactElement,
): React.ReactElement => {
  return (
    <ProgressTracker
      backgroundColor={text("Background Color", "white")}
      itemsWrapperClassNames="tracker"
    >
      {children}
    </ProgressTracker>
  );
};

const stories = storiesOf("Job Poster Builder|Progress Tracker/Item", module);

stories.add(
  "Active",
  (): React.ReactElement =>
    ProgressTrackerWrapper(
      <ProgressTrackerItem
        state={text("State", "active")}
        label={text("Label", "Step 01")}
        title={text("Title", "Job Info")}
        fontColor={text("Font Color", "black")}
      />,
    ),
);

stories.add(
  "Complete",
  (): React.ReactElement =>
    ProgressTrackerWrapper(
      <ProgressTrackerItem
        state={text("State", "complete")}
        label={text("Label", "Step 02")}
        title={text("Title", "Work Env.")}
        fontColor={text("Font Color", "black")}
      />,
    ),
);

stories.add(
  "Error",
  (): React.ReactElement =>
    ProgressTrackerWrapper(
      <ProgressTrackerItem
        state={text("State", "error")}
        label={text("Label", "Step 03")}
        title={text("Title", "impact")}
        fontColor={text("Font Color", "black")}
      />,
    ),
);

stories.add(
  "Null",
  (): React.ReactElement =>
    ProgressTrackerWrapper(
      <ProgressTrackerItem
        state={text("State", "null")}
        label={text("Label", "Step 04")}
        title={text("Title", "Tasks")}
        fontColor={text("Font Color", "black")}
      />,
    ),
);
