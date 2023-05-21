import React from "react";

function page({ params }) {
  return <div id="1">procuct: {JSON.stringify(params.id)}</div>;
}

export default page;
