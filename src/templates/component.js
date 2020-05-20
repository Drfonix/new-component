import React from "react";
import PropTypes from "prop-types";

/**
 * Imports styles
 */
import { useStyles } from "./COMPONENT_NAME.styles";

/**
 * Imports i18n
 */
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import { LANG_LANG } from "./COMPONENT_NAME.lang.LANG-LANG";

i18n.addResourceBundle("lang-LANG", "COMPONENT_NAME", LANG_LANG);

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Displays the component
 */
const COMPONENT_NAME = (props) => {
  /**
   * Handles the translations
   */
  const { t } = useTranslation("COMPONENT_NAME");

  /**
   * Gets the component styles
   */
  const { component_name } = useStyles();

  return <div className={component_name}>{t("COMPONENT_NAME")}</div>;
};

COMPONENT_NAME.propTypes = propTypes;
COMPONENT_NAME.defaultProps = defaultProps;

export default COMPONENT_NAME;
export {
  propTypes as COMPONENT_NAMEPropTypes,
  defaultProps as COMPONENT_NAMEDefaultProps,
};
