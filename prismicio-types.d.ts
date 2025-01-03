// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type PageDocumentDataSlicesSlice =
  | LocationsSlice
  | ProgramDetailsSlice
  | QuestionsAndAnswersSlice
  | IdentitySectionSlice
  | ContactUsSlice
  | AboutUsSlice
  | HomeHeroSectionSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Item in *Program Details → About the Program*
 */
export interface ProgramDetailsDocumentDataAboutTheProgramItem {
  /**
   * Title field in *Program Details → About the Program*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: program_details.about_the_program[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Subtitle field in *Program Details → About the Program*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: program_details.about_the_program[].subtitle
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subtitle: prismic.RichTextField;

  /**
   * image field in *Program Details → About the Program*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: program_details.about_the_program[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Content for Program Details documents
 */
interface ProgramDetailsDocumentData {
  /**
   * Program Badge field in *Program Details*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: program_details.program_badge
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  program_badge: prismic.ImageField<never>;

  /**
   * Program Title field in *Program Details*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: program_details.program_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  program_title: prismic.KeyTextField;

  /**
   * Program Description field in *Program Details*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: program_details.program_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  program_description: prismic.KeyTextField;

  /**
   * About the Program field in *Program Details*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: program_details.about_the_program[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  about_the_program: prismic.GroupField<
    Simplify<ProgramDetailsDocumentDataAboutTheProgramItem>
  >;
}

/**
 * Program Details document from Prismic
 *
 * - **API ID**: `program_details`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProgramDetailsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProgramDetailsDocumentData>,
    "program_details",
    Lang
  >;

type ProgrampageDocumentDataSlicesSlice = ProgramPageSlice;

/**
 * Content for ProgramPage documents
 */
interface ProgrampageDocumentData {
  /**
   * Slice Zone field in *ProgramPage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: programpage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProgrampageDocumentDataSlicesSlice> /**
   * Meta Title field in *ProgramPage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: programpage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *ProgramPage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: programpage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *ProgramPage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: programpage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * ProgramPage document from Prismic
 *
 * - **API ID**: `programpage`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProgrampageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProgrampageDocumentData>,
    "programpage",
    Lang
  >;

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * OG Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | PageDocument
  | ProgramDetailsDocument
  | ProgrampageDocument
  | SettingsDocument;

/**
 * Item in *AboutUs → Default → Primary → Adventure Learning*
 */
export interface AboutUsSliceDefaultPrimaryAdventureLearningItem {
  /**
   * Title field in *AboutUs → Default → Primary → Adventure Learning*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_us.default.primary.adventure_learning[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Subtitle field in *AboutUs → Default → Primary → Adventure Learning*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_us.default.primary.adventure_learning[].subtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle: prismic.KeyTextField;
}

/**
 * Item in *AboutUs → Default → Primary → Vision*
 */
export interface AboutUsSliceDefaultPrimaryVisionItem {
  /**
   * Title field in *AboutUs → Default → Primary → Vision*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_us.default.primary.vision[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Subtitle field in *AboutUs → Default → Primary → Vision*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_us.default.primary.vision[].subtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle: prismic.KeyTextField;
}

/**
 * Item in *AboutUs → Default → Primary → Mission*
 */
export interface AboutUsSliceDefaultPrimaryMissionItem {
  /**
   * Title field in *AboutUs → Default → Primary → Mission*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_us.default.primary.mission[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Subtitle field in *AboutUs → Default → Primary → Mission*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_us.default.primary.mission[].subtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle: prismic.KeyTextField;
}

/**
 * Primary content in *AboutUs → Default → Primary*
 */
export interface AboutUsSliceDefaultPrimary {
  /**
   * Primary Section Title field in *AboutUs → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_us.default.primary.primary_section_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  primary_section_title: prismic.KeyTextField;

  /**
   * Primary Image field in *AboutUs → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_us.default.primary.primary_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  primary_image: prismic.ImageField<never>;

  /**
   * Secondary Image field in *AboutUs → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_us.default.primary.secondary_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  secondary_image: prismic.ImageField<never>;

  /**
   * Adventure Learning field in *AboutUs → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: about_us.default.primary.adventure_learning[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  adventure_learning: prismic.GroupField<
    Simplify<AboutUsSliceDefaultPrimaryAdventureLearningItem>
  >;

  /**
   * Vision field in *AboutUs → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: about_us.default.primary.vision[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  vision: prismic.GroupField<Simplify<AboutUsSliceDefaultPrimaryVisionItem>>;

  /**
   * Mission field in *AboutUs → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: about_us.default.primary.mission[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  mission: prismic.GroupField<Simplify<AboutUsSliceDefaultPrimaryMissionItem>>;
}

/**
 * Default variation for AboutUs Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutUsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutUsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *AboutUs*
 */
type AboutUsSliceVariation = AboutUsSliceDefault;

/**
 * AboutUs Shared Slice
 *
 * - **API ID**: `about_us`
 * - **Description**: AboutUs
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutUsSlice = prismic.SharedSlice<
  "about_us",
  AboutUsSliceVariation
>;

/**
 * Primary content in *ContactUs → Default → Primary*
 */
export interface ContactUsSliceDefaultPrimary {
  /**
   * Title field in *ContactUs → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_us.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Subtitle field in *ContactUs → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_us.default.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle: prismic.KeyTextField;
}

/**
 * Default variation for ContactUs Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactUsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactUsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ContactUs*
 */
type ContactUsSliceVariation = ContactUsSliceDefault;

/**
 * ContactUs Shared Slice
 *
 * - **API ID**: `contact_us`
 * - **Description**: ContactUs
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactUsSlice = prismic.SharedSlice<
  "contact_us",
  ContactUsSliceVariation
>;

/**
 * Item in *HomeHeroSection → Default → Primary → Hero Cal to Action*
 */
export interface HomeHeroSectionSliceDefaultPrimaryHeroCalToActionItem {
  /**
   * link field in *HomeHeroSection → Default → Primary → Hero Cal to Action*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: home_hero_section.default.primary.hero_cal_to_action[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Primary content in *HomeHeroSection → Default → Primary*
 */
export interface HomeHeroSectionSliceDefaultPrimary {
  /**
   * Hero Image field in *HomeHeroSection → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home_hero_section.default.primary.hero_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  hero_image: prismic.ImageField<never>;

  /**
   * Hero Title field in *HomeHeroSection → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home_hero_section.default.primary.hero_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  hero_title: prismic.KeyTextField;

  /**
   * Hero Subtitle field in *HomeHeroSection → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home_hero_section.default.primary.hero_subtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  hero_subtitle: prismic.KeyTextField;

  /**
   * Hero Descrption field in *HomeHeroSection → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home_hero_section.default.primary.hero_descrption
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  hero_descrption: prismic.KeyTextField;

  /**
   * Hero Cal to Action field in *HomeHeroSection → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: home_hero_section.default.primary.hero_cal_to_action[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  hero_cal_to_action: prismic.GroupField<
    Simplify<HomeHeroSectionSliceDefaultPrimaryHeroCalToActionItem>
  >;
}

/**
 * Default variation for HomeHeroSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HomeHeroSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HomeHeroSectionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *HomeHeroSection*
 */
type HomeHeroSectionSliceVariation = HomeHeroSectionSliceDefault;

/**
 * HomeHeroSection Shared Slice
 *
 * - **API ID**: `home_hero_section`
 * - **Description**: HomeHeroSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HomeHeroSectionSlice = prismic.SharedSlice<
  "home_hero_section",
  HomeHeroSectionSliceVariation
>;

/**
 * Item in *IdentitySection → Default → Primary → Framework points*
 */
export interface IdentitySectionSliceDefaultPrimaryFrameworkPointsItem {
  /**
   * Title field in *IdentitySection → Default → Primary → Framework points*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: identity_section.default.primary.framework_points[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Subtitle field in *IdentitySection → Default → Primary → Framework points*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: identity_section.default.primary.framework_points[].subtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle: prismic.KeyTextField;

  /**
   * Background Image field in *IdentitySection → Default → Primary → Framework points*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: identity_section.default.primary.framework_points[].background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;
}

/**
 * Primary content in *IdentitySection → Default → Primary*
 */
export interface IdentitySectionSliceDefaultPrimary {
  /**
   * Main Section Title field in *IdentitySection → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: identity_section.default.primary.main_section_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  main_section_title: prismic.KeyTextField;

  /**
   * Framework points field in *IdentitySection → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: identity_section.default.primary.framework_points[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  framework_points: prismic.GroupField<
    Simplify<IdentitySectionSliceDefaultPrimaryFrameworkPointsItem>
  >;
}

/**
 * Default variation for IdentitySection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type IdentitySectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<IdentitySectionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *IdentitySection*
 */
type IdentitySectionSliceVariation = IdentitySectionSliceDefault;

/**
 * IdentitySection Shared Slice
 *
 * - **API ID**: `identity_section`
 * - **Description**: IdentitySection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type IdentitySectionSlice = prismic.SharedSlice<
  "identity_section",
  IdentitySectionSliceVariation
>;

/**
 * Item in *Locations → Default → Primary → Locations*
 */
export interface LocationsSliceDefaultPrimaryLocationsItem {
  /**
   * School Image field in *Locations → Default → Primary → Locations*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: locations.default.primary.locations[].school_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  school_image: prismic.ImageField<never>;
}

/**
 * Primary content in *Locations → Default → Primary*
 */
export interface LocationsSliceDefaultPrimary {
  /**
   * Section Title field in *Locations → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: locations.default.primary.section_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  section_title: prismic.KeyTextField;

  /**
   * Locations field in *Locations → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: locations.default.primary.locations[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  locations: prismic.GroupField<
    Simplify<LocationsSliceDefaultPrimaryLocationsItem>
  >;
}

/**
 * Default variation for Locations Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LocationsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<LocationsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Locations*
 */
type LocationsSliceVariation = LocationsSliceDefault;

/**
 * Locations Shared Slice
 *
 * - **API ID**: `locations`
 * - **Description**: Locations
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LocationsSlice = prismic.SharedSlice<
  "locations",
  LocationsSliceVariation
>;

/**
 * Item in *ProgramDetails → Default → Primary → Programs Details*
 */
export interface ProgramDetailsSliceDefaultPrimaryProgramsDetailsItem {
  /**
   * A Single Program Details field in *ProgramDetails → Default → Primary → Programs Details*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: program_details.default.primary.programs_details[].a_single_program_details
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  a_single_program_details: prismic.ContentRelationshipField<"program_details">;

  /**
   * Is Program Active field in *ProgramDetails → Default → Primary → Programs Details*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: true
   * - **API ID Path**: program_details.default.primary.programs_details[].is_program_active
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  is_program_active: prismic.BooleanField;
}

/**
 * Primary content in *ProgramDetails → Default → Primary*
 */
export interface ProgramDetailsSliceDefaultPrimary {
  /**
   * Section Title field in *ProgramDetails → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: program_details.default.primary.section_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  section_title: prismic.KeyTextField;

  /**
   * Programs Details field in *ProgramDetails → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: program_details.default.primary.programs_details[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  programs_details: prismic.GroupField<
    Simplify<ProgramDetailsSliceDefaultPrimaryProgramsDetailsItem>
  >;
}

/**
 * Default variation for ProgramDetails Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProgramDetailsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProgramDetailsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ProgramDetails*
 */
type ProgramDetailsSliceVariation = ProgramDetailsSliceDefault;

/**
 * ProgramDetails Shared Slice
 *
 * - **API ID**: `program_details`
 * - **Description**: ProgramDetails
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProgramDetailsSlice = prismic.SharedSlice<
  "program_details",
  ProgramDetailsSliceVariation
>;

/**
 * Primary content in *ProgramPage → Default → Primary*
 */
export interface ProgramPageSliceDefaultPrimary {
  /**
   * Program Details field in *ProgramPage → Default → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: program_page.default.primary.program_details
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  program_details: prismic.ContentRelationshipField<"program_details">;
}

/**
 * Default variation for ProgramPage Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProgramPageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProgramPageSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ProgramPage*
 */
type ProgramPageSliceVariation = ProgramPageSliceDefault;

/**
 * ProgramPage Shared Slice
 *
 * - **API ID**: `program_page`
 * - **Description**: ProgramPage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProgramPageSlice = prismic.SharedSlice<
  "program_page",
  ProgramPageSliceVariation
>;

/**
 * Item in *QuestionsAndAnswers → Default → Primary → Questions and answers*
 */
export interface QuestionsAndAnswersSliceDefaultPrimaryQuestionsAndAnswersItem {
  /**
   * Question field in *QuestionsAndAnswers → Default → Primary → Questions and answers*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: questions_and_answers.default.primary.questions_and_answers[].question
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  question: prismic.KeyTextField;

  /**
   * Answer field in *QuestionsAndAnswers → Default → Primary → Questions and answers*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: questions_and_answers.default.primary.questions_and_answers[].answer
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  answer: prismic.KeyTextField;
}

/**
 * Primary content in *QuestionsAndAnswers → Default → Primary*
 */
export interface QuestionsAndAnswersSliceDefaultPrimary {
  /**
   * SectionTitle field in *QuestionsAndAnswers → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: questions_and_answers.default.primary.sectiontitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  sectiontitle: prismic.KeyTextField;

  /**
   * Image field in *QuestionsAndAnswers → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: questions_and_answers.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Questions and answers field in *QuestionsAndAnswers → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: questions_and_answers.default.primary.questions_and_answers[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  questions_and_answers: prismic.GroupField<
    Simplify<QuestionsAndAnswersSliceDefaultPrimaryQuestionsAndAnswersItem>
  >;
}

/**
 * Default variation for QuestionsAndAnswers Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type QuestionsAndAnswersSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<QuestionsAndAnswersSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *QuestionsAndAnswers*
 */
type QuestionsAndAnswersSliceVariation = QuestionsAndAnswersSliceDefault;

/**
 * QuestionsAndAnswers Shared Slice
 *
 * - **API ID**: `questions_and_answers`
 * - **Description**: QuestionsAndAnswers
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type QuestionsAndAnswersSlice = prismic.SharedSlice<
  "questions_and_answers",
  QuestionsAndAnswersSliceVariation
>;

/**
 * Primary content in *RichText → Default → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * Content field in *RichText → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Lorem ipsum...
   * - **API ID Path**: rich_text.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RichTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  "rich_text",
  RichTextSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      ProgramDetailsDocument,
      ProgramDetailsDocumentData,
      ProgramDetailsDocumentDataAboutTheProgramItem,
      ProgrampageDocument,
      ProgrampageDocumentData,
      ProgrampageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      AllDocumentTypes,
      AboutUsSlice,
      AboutUsSliceDefaultPrimaryAdventureLearningItem,
      AboutUsSliceDefaultPrimaryVisionItem,
      AboutUsSliceDefaultPrimaryMissionItem,
      AboutUsSliceDefaultPrimary,
      AboutUsSliceVariation,
      AboutUsSliceDefault,
      ContactUsSlice,
      ContactUsSliceDefaultPrimary,
      ContactUsSliceVariation,
      ContactUsSliceDefault,
      HomeHeroSectionSlice,
      HomeHeroSectionSliceDefaultPrimaryHeroCalToActionItem,
      HomeHeroSectionSliceDefaultPrimary,
      HomeHeroSectionSliceVariation,
      HomeHeroSectionSliceDefault,
      IdentitySectionSlice,
      IdentitySectionSliceDefaultPrimaryFrameworkPointsItem,
      IdentitySectionSliceDefaultPrimary,
      IdentitySectionSliceVariation,
      IdentitySectionSliceDefault,
      LocationsSlice,
      LocationsSliceDefaultPrimaryLocationsItem,
      LocationsSliceDefaultPrimary,
      LocationsSliceVariation,
      LocationsSliceDefault,
      ProgramDetailsSlice,
      ProgramDetailsSliceDefaultPrimaryProgramsDetailsItem,
      ProgramDetailsSliceDefaultPrimary,
      ProgramDetailsSliceVariation,
      ProgramDetailsSliceDefault,
      ProgramPageSlice,
      ProgramPageSliceDefaultPrimary,
      ProgramPageSliceVariation,
      ProgramPageSliceDefault,
      QuestionsAndAnswersSlice,
      QuestionsAndAnswersSliceDefaultPrimaryQuestionsAndAnswersItem,
      QuestionsAndAnswersSliceDefaultPrimary,
      QuestionsAndAnswersSliceVariation,
      QuestionsAndAnswersSliceDefault,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
    };
  }
}
