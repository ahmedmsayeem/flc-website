import React from "react";
import {
  CldUploadWidget,
  type CloudinaryUploadWidgetInfo,
} from "next-cloudinary";
import { useState } from "react";

export default function Index() {
  const [url, setUrl] = useState<string | null>(null);

  return (
    <div>
      <CldUploadWidget
        signatureEndpoint="/api/cloudinary/sign"
        onSuccess={(result, widget) => {
          const { info } = result;
          const { secure_url } = info as CloudinaryUploadWidgetInfo;
          setUrl(secure_url);
          console.log(widget);
        }}
      >
        {({ open }) => {
          return <button onClick={() => open()}>Upload an Image</button>;
        }}
      </CldUploadWidget>

      {url && <div>{url}</div>}
    </div>
  );
}
