import React from 'react';
import { Helmet } from 'react-helmet';
import { DOMAIN_NAME, LOGO_URL, SITE_NAME } from '../../constants/constant';

export const PageMeta = ({ meta = {} }) => {
  let canonicalURL = DOMAIN_NAME + meta?.canonical;
  const ogTitle = meta?.ogTitle || meta?.title;
  const ogDescription = meta?.ogDescription || meta?.description;
  const ogImage = null;

  return (
    <React.Fragment>
      <Helmet>
        <title>{meta?.title}</title>
        <meta name="description" content={meta?.description} />
        <meta name="keywords" content={meta?.keywords || ''} />
        <meta name="news_keywords" content={meta?.keywords || ''} />

        {canonicalURL && <link rel="canonical" href={canonicalURL} />}
        {meta?.noindex ? <meta content="NOINDEX,NOFOLLOW" name="robots" /> : null}
        {/* OG Tags */}
        <meta name="og:type" content="article" />
        <meta property="og:title" content={ogTitle} />
        {canonicalURL && <meta property="og:url" content={canonicalURL} />}
        <meta property="og:site_name" content={SITE_NAME} />
        {ogImage && <meta property="og:image" content={ogImage} />}
        <meta property="og:description" content={ogDescription} />
        {/* Item Prop */}
        <meta itemProp="name" content={meta?.title} />
        <meta itemProp="description" content={meta?.description} />
        <meta itemProp="image" content={meta?.ogimg} />
        {canonicalURL && <meta itemProp="url" content={canonicalURL} />}
        {/* Twitter Card */}
        {/* <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={ogDescription} />
        {ogImage && <meta name="twitter:image" content={ogImage} />}
        {canonicalURL && <meta name="twitter:url" content={canonicalURL} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={langConfig.twitterHandler} />
        <meta name="twitter:creator" content={langConfig.twitterHandler} /> */}
      </Helmet>
    </React.Fragment>
  );
};

export const SeoSchema = prop => {
  const siteLogo = LOGO_URL;

  const props = prop || {};

  const { url } = props;

  const itemidUrl = DOMAIN_NAME + url;

  // Schema for Listing Pages
  const listSchema = {
        itemList: {
          itemScope: 'itemScope',
          itemType: 'http://schema.org/ItemList'
        },
        listItem: {
          itemProp: 'itemListElement',
          itemScope: 'itemScope',
          itemType: 'http://schema.org/ListItem'
        },
        url: { itemProp: 'url' },
        name: { itemProp: 'name' },
        item: { itemProp: 'item' }
      }
    


  const articleSchema =  {
          NewsArticle: {
            itemScope: 'itemScope',
            itemType: 'http://schema.org/NewsArticle'
          },
          Article: {
            itemScope: 'itemScope',
            itemType: 'http://schema.org/Article'
          },
          Movie: {
            itemScope: 'itemScope',
            itemType: 'http://schema.org/Movie'
          },
          pageheadline: { itemProp: 'headline' },
          author: { itemProp: 'author', itemType: 'Thing' },
          person: {
            itemProp: 'author',
            itemScope: 'itemScope',
            itemType: 'http://schema.org/Person'
          },
          articleBody: { itemProp: 'articleBody' },
          Recipe: {
            itemScope: 'itemScope',
            itemType: 'http://schema.org/Recipe'
          },
          PrepTime: { itemProp: 'prepTime' },
          CookTime: { itemProp: 'cookTime' },
          Nutrition: {
            itemScope: 'itemScope',
            itemProp: 'nutrition',
            itemType: 'http://schema.org/NutritionInformation'
          },
          Calories: { itemProp: 'calories' },
          Ingredients: { itemProp: 'recipeIngredient' },
          Instructions: { itemProp: 'recipeInstructions' }
        };

  // FixMe: for Test only need to make this code dynamic

  const seo = {};

  // Set to 0 where schema not required. Checked on the basis of schema object length
  const flag = Object.keys(listSchema).length == 0 ? 0 : 1;
  const articlflag = Object.keys(articleSchema).length == 0 ? 0 : 1;

  seo.commonSchema = obj => {
    const commonSchema = `{"@context": "http://schema.org","@graph":[{"@type": "Organization", "name": "${SITE_NAME}", "url": "${DOMAIN_NAME}", "logo":{"@type":"ImageObject", "url": "${siteLogo}", "width":600, "height":60}}]}`;
    const schemaUrl = `${DOMAIN_NAME}/search?headline={search_term_string}`;
    const websiteSchemaAction = `{"@context": "http://schema.org","@graph":[{"@type": "Website", "name": "Asianet News", "url": "${DOMAIN_NAME}", "potentialAction":{"@type":"SearchAction", "target" :{"@type": "EntryPoint", "urlTemplate": "${schemaUrl}"} , "query-input" : {"@type": "PropertyValueSpecification" , "valueRequired" : "http://schema.org/True" , "valueName" : "search_term_string"}}}]}`;
    let schemaScript = `<script type="application/ld+json" data-type="ampElement">${commonSchema}</script>`;
    schemaScript += `<script type="application/ld+json" data-type="ampElement">${websiteSchemaAction}</script>`;
    return schemaScript;
  };

  seo.publisherObj = data => (
    <div itemProp="publisher" itemScope="itemScope" itemType="https://schema.org/Organization">
      <meta itemProp="name" content={SITE_NAME} />
      {/* <meta itemProp="url" content={langConfig.weburl} /> */}
      <div itemType="https://schema.org/ImageObject" itemScope="itemScope" itemProp="logo">
        <meta itemProp="url" content={siteLogo} />
        <meta content="600" itemProp="width" />
        <meta content="60" itemProp="height" />
      </div>
    </div>
  );
  // job schema
  seo.job = data => (
    // data = (data);
    <script
      type="application/ld+json"
      data-type="ampElement"
      dangerouslySetInnerHTML={{ __html: data }}
    />
  );
  // faq schema
  // seo.schema = data => (
  //   //data = JSON.stringify(data);
  //   <script type="application/ld+json" data-type="ampElement" dangerouslySetInnerHTML={{ __html: data }} />
  // );

  seo.itemList = () => (flag ? { ...listSchema.itemList } : '');

  seo.listItem = () => (flag ? { ...listSchema.listItem } : '');

  seo.numberofitems = count => (flag ? <meta itemProp="numberOfItems" content={count} /> : '');

  seo.metaUrl = url => (url ? <meta itemProp="url" content={DOMAIN_NAME + url} /> : '');

  seo.metaPosition = position =>
    flag && position ? <meta itemProp="position" content={position} /> : '';

  seo.attr = () => (flag ? listSchema : articlflag ? articleSchema :  '');

  seo.about = () => <meta itemProp="about" content="Event" />;

  seo.galleryAttr = {
    itemProp: 'associatedMedia',
    itemScope: 'itemScope',
    itemType: 'http://schema.org/ImageObject'
  };

  seo.mainEntry = url => <meta itemProp="mainEntityOfPage" content={DOMAIN_NAME + url} />;

  seo.thumbnail = src => (src ? <meta itemProp="thumbnailUrl" content={src} /> : '');
  seo.contentUrl = contenturl =>
    contenturl ? <meta itemProp="contenturl" content={contenturl} /> : null;
  seo.name = name => (name ? <meta itemProp="name" content={name} /> : '');
  seo.description = description =>
    description ? <meta itemProp="description" content={description} /> : '';
  seo.caption = value => (value ? <meta itemProp="caption" content={value} /> : '');


  seo.dateStatus = (published, modified) => (
    <React.Fragment>
      {published ? <meta itemProp="datePublished" content={published} /> : ''}
      {modified ? <meta itemProp="dateModified" content={modified} /> : ''}
    </React.Fragment>
  );

  seo.headline = headline => (headline ? <meta itemProp="headline" content={headline} /> : '');

  seo.artSection = sec => <meta itemProp="articleSection" content={sec} />;
  seo.disambiguatingDescription = syn => (
    <meta itemProp="disambiguatingDescription" content={syn} />
  );

  seo.artdesc = syn => <meta itemProp="description" content={syn} />;

  seo.language = () => <meta itemProp="inLanguage" content="en" />;

  seo.alternativeHeadline = headline =>
    headline ? <meta itemProp="alternativeHeadline" content={headline} /> : '';
  seo.alternateName = alternatetitle =>
    alternatetitle ? <meta itemProp="alternateName" content={alternatetitle} /> : '';

  seo.keywords = keywords => (keywords ? <meta itemProp="keywords" content={keywords} /> : '');

  seo.metaTag = props => {
    const { name, content, type } = props;
    let contentval = content ? content.toString() : '';
    contentval =
      contentval.indexOf('.com') > -1
        ? contentval
        : contentval.substring(0, 110);

    contentval = name === 'mainEntityOfPage' ? DOMAIN_NAME + contentval : contentval;
    if (name && content && type) {
      return <meta itemProp={name} content={contentval} itemType={type} />;
    }
    return name && content ? <meta itemProp={name} content={contentval} /> : null;
  };

  return seo;
};

export default { PageMeta, SeoSchema };
