import PropTypes from 'prop-types';
export const ROUTES = {
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D',
  E: 'E',
};

export const NAVIGATION_TAB_PROP_TYPE = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.oneOf(['A', 'B', 'C', 'D', 'E']),
    action: PropTypes.func,
  }),
);
