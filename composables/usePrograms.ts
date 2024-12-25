export const usePrograms = () => {
  // define prismic settings and make them available to this file
  const prismicSettings = usePrismic();

  const { data: programDetails } = useAsyncData("$program_details", () =>
    prismicSettings.client.getAllByType("program_details"),
  );

  return { programDetails };
};
