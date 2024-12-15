export const useSettings = () => {
  // define prismic settings and make them availabe to this file
  const prismicSettings = usePrismic();

  const { data: settings } = useAsyncData("$settings", () =>
    prismicSettings.client.getSingle("settings")
  );

  return { settings };
};
