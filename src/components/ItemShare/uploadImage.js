import { Typography } from "@material-ui/core";
import React,{ useState } from "react";
import { RMIUploader } from "react-multiple-image-uploader";

const dataSources = [{}];

function UploadImage() {
  const [visible, setVisible] = useState(false);
  const handleSetVisible = () => {
    setVisible(true);
  };
  const hideModal = () => {
    setVisible(false);
  };
  const onUpload = (data) => {
    console.log("Upload files", data);
  };
  const onSelect = (data) => {
    console.log("Select files", data);
  };
  const onRemove = (id) => {
    console.log("Remove image id", id);
  };

  return (
    <div>
      <Typography style={{fontSize:20, fontWeight:500}}>Upload your images</Typography>
      {/* <button onClick={handleSetVisible}>Show Me</button> */}
      <RMIUploader
        isOpen={visible}
        hideModal={hideModal}
        onSelect={onSelect}
        onUpload={onUpload}
        onRemove={onRemove}
        dataSources={dataSources}
      />
    </div>
  );
}

export default UploadImage;