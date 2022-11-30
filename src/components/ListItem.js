import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";

export const ListItem = React.memo(({ name, color }) => {
  console.log(" == volor === ", color);
  const [cl] = useState(color);
  const getColor = useMemo(() => cl, [cl]);
  return (
    <li
      style={{
        ...(color && {
          background: getColor,
        }),
      }}
    >
      <span>{name ?? "-"}</span>
    </li>
  );
});

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
  name: undefined,
  color: undefined,
};
