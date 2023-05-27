import { useMemo } from "react";

export default function useRichTextOptions() {
  const modules = useMemo(() => {
    return {
      toolbar: [
        [{ 'script': 'sub' }, { 'script': 'super' }],
      ],
      clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
      },
      keyboard: {
        bindings: {
          tab: {
            key: 9,
            handler: function () {
              // Handle tab
              console.log("Tab pressed");
              return;
            }
          },
          enter: {
            key: 13,
            handler: function () {
              // Handle enter
              // Have this fire the check answer function
              console.log("Enter pressed");
              return;
            }
          },
        }
      }
    };
  }, []);

  const formats = useMemo(() => {
    return ['script'];
  }, []);

  return {
    formats,
    modules
  }
}