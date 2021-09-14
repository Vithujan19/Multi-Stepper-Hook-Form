import React, { useState, useEffect } from 'react';
import { Grid, InputBase, Paper, Select, Typography, TextareaAutosize, Button } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import axios from 'axios';
// import { useHistory, useParams } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
import {showSuccessMsg,showErrMsg} from '../../utils/Notification/Notification';

const initialState = {
    title: '',
    price: 0,
    category: '',
    subcategory:'',
    image:'',
    err: '',
    success: '',
}

export const Confirm = ({ formData, setFormData,image, prevStep, nextStep }) => {


    // const [item, setItem] = useState(initialState);

    const { title, price, category, subcategory, err, success } = formData;

    const handleChangeInput = e => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value, err: '', success: '' })
    }

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const res = await axios.post('/api/items', {
              title, price, category, subcategory,image, err, success
            })

            setFormData({ ...formData, err: '', success: res.data.msg })

            nextStep();

        } catch (err) {
            err.response.data.msg &&
            setFormData({ ...formData, err: err.response.data.msg, success: '' })
        }
    }

    // const [images, setImages] = useState({});

  

    return (
        <Grid container className="create_product">
            <Grid xs={false} sm={1} md={2} lg={3}></Grid>
            {/* <div className="upload">
                    <input type="file" name="file" id="file_up" onChange={handleUpload} />
                    {
                        loading ? <div id="file_img"><Loading /></div>

                            : <div id="file_img" style={styleUpload}>
                                <img src={images ? images.url : ''} alt="" />
                                <span onClick={handleDestroy}>X</span>
                            </div>
                    }
                </div> */}
            <Grid xs={12} sm={10} md={8} lg={6}>
                <Paper elevation={3} style={{ padding: 50 }}>
                    <Grid xs={12} sm={10} md={8} lg={6}>
                        <Typography style={{ fontWeight: 500, fontSize: 30 }}>Host Your Items</Typography>
                    </Grid>
                    {err && showErrMsg(err)}
      {success && showSuccessMsg(success)}
                    
                    <form onSubmit={handleSubmit} noValidate>

                        {/* <div className="row" style={{ padding: 10 }}>
                            <Typography style={{ fontWeight: 500, fontSize: 16 }}>Title</Typography>
                            <InputBase style={{ boxShadow: "1px 1px 15px 1px #cfd1d4 ", paddingLeft: 15 }} className="item_input" type="text" name="title" id="title" required
                                value={title} onChange={handleChangeInput} />
                        </div> */}
                        <Grid className="row" style={{ padding: 10 }}>
                            <Grid style={{ paddingTop: 10, textAlign: "left" }}>
                                <Typography style={{ fontWeight: 500, fontSize: 16 }}>category</Typography>

                                <input className="inputCls" type="text" name="category" id="category" required value={category} onChange={handleChangeInput} style={{ boxShadow: "1px 1px 15px 1px #cfd1d4 ", paddingLeft: 15 }} />
                                <br />
                            </Grid>
                        </Grid>
                        <Grid className="row" style={{ padding: 10 }}>
                            <Grid style={{ paddingTop: 10, textAlign: "left" }}>
                                <Typography style={{ fontWeight: 500, fontSize: 16 }}>subcategory</Typography>

                                <input className="inputCls" type="text" name="subcategory" id="subcategory" required value={subcategory} onChange={handleChangeInput} style={{ boxShadow: "1px 1px 15px 1px #cfd1d4 ", paddingLeft: 15 }} />
                                <br />
                            </Grid>
                        </Grid>
                        <Grid className="row" style={{ padding: 10 }}>
                            <Grid style={{ paddingTop: 10, textAlign: "left" }}>
                                <Typography style={{ fontWeight: 500, fontSize: 16 }}>Title</Typography>

                                <input className="inputCls" name="title" id="title" type="text" value={title} onChange={handleChangeInput} required style={{ boxShadow: "1px 1px 15px 1px #cfd1d4 ", paddingLeft: 15 }} />
                                <br />
                            </Grid>
                        </Grid>

                        <Grid className="row" style={{ padding: 10 }}>
                            {/* <Typography style={{ fontWeight: 500, fontSize: 16 }}>Price</Typography>
                            <InputBase style={{ boxShadow: "1px 1px 15px 1px #cfd1d4 ", paddingLeft: 15 }} className="item_input" type="number" name="price" id="price" required
                                value={price} onChange={handleChangeInput} /> */}
                            <Grid style={{ paddingTop: 10, textAlign: "left" }}>
                                <Typography style={{ fontWeight: 500, fontSize: 16 }}>Image</Typography>

                                <img src={image} alt="" />
                                <br />
                            </Grid>
                        </Grid>
                        <Grid className="row" style={{ padding: 10 }}>
                            {/* <Typography style={{ fontWeight: 500, fontSize: 16 }}>Price</Typography>
                            <InputBase style={{ boxShadow: "1px 1px 15px 1px #cfd1d4 ", paddingLeft: 15 }} className="item_input" type="number" name="price" id="price" required
                                value={price} onChange={handleChangeInput} /> */}
                            <Grid style={{ paddingTop: 10, textAlign: "left" }}>
                                <Typography style={{ fontWeight: 500, fontSize: 16 }}>Price</Typography>

                                <input className="inputCls" name="images" id="price" type="number" value={price} onChange={handleChangeInput} required style={{ boxShadow: "1px 1px 15px 1px #cfd1d4 ", paddingLeft: 15 }} />
                                <br />
                            </Grid>
                        </Grid>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            style={{ backgroundColor: "#CF0505", fontSize: 17, fontWeight: 800, padding: 8, borderRadius: 10 }}
                        >
                            Create
                        </Button>
                        {/* <Button className="item_btn" type="submit">Create</Button> */}
                    </form>
                    {/* {err && showErrMsg(err)}
                    {success && showSuccessMsg(success)} */}
                </Paper>
            </Grid>
            <Grid xs={false} sm={1} md={2} lg={3}></Grid>
        </Grid>
    )
}