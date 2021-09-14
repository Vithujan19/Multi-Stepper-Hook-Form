import React, { useState, useEffect } from 'react';
import { Grid, InputBase, Paper, Select, Typography, TextareaAutosize, Button } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../utils/loading/Loading';
import './ItemShareForm.css';
import UploadImage from './uploadImage';
import Vehicle from './Vehicle';
import Residencies from './Residencies';
import { showErrMsg, showSuccessMsg } from '../utils/Notification/Notification';
import MultiImageInput from 'react-multiple-image-input';

const initialState = {
    product_id: '',
    title: '',
    price: 0,
    description: 'A small description about your items..',
    content: 'Add your Amenities..',
    category: '',
    street: '',
    city: '',
    province: '',
    zip: '',
    err: '',
    success: '',
}

function ItemShareForm() {


    const [item, setItem] = useState(initialState);

    const { product_id, title, price, description, content, category, street, city, province, zip, err, success } = item;

    const handleChangeInput = e => {
        const { name, value } = e.target
        setItem({ ...item, [name]: value, err: '', success: '' })
    }

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const res = await axios.post('/api/items', {
                product_id, title, price, description, content, category, street, city, province, zip, err, success
            })

            setItem({ ...item, err: '', success: res.data.msg })

        } catch (err) {
            err.response.data.msg &&
                setItem({ ...item, err: err.response.data.msg, success: '' })
        }
    }

    const [images, setImages] = useState({});

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
                                <Typography style={{ fontWeight: 500, fontSize: 16 }}>Product ID</Typography>

                                <input className="inputCls" type="text" name="product_id" id="product_id" required value={product_id} onChange={handleChangeInput} style={{ boxShadow: "1px 1px 15px 1px #cfd1d4 ", paddingLeft: 15 }} />
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
                                <Typography style={{ fontWeight: 500, fontSize: 16 }}>Price</Typography>

                                <input className="inputCls" name="price" id="price" type="number" value={price} onChange={handleChangeInput} required style={{ boxShadow: "1px 1px 15px 1px #cfd1d4 ", paddingLeft: 15 }} />
                                <br />
                            </Grid>
                        </Grid>

                        <Grid container xs={12} sm={12} className="row" style={{ padding: 10 }}>
                            <Grid xs={12} sm={6} style={{ padding: 10 }}>
                                {/* <Typography style={{ fontWeight: 500, fontSize: 16 }}>Street</Typography>
                                <InputBase style={{ boxShadow: "1px 1px 15px 1px #cfd1d4 ", paddingLeft: 15 }} className="item_input" type="text" name="street" id="street" required
                                    value={street} onChange={handleChangeInput}/> */}
                                <Grid style={{ paddingTop: 10, textAlign: "left" }}>
                                    <Typography style={{ fontWeight: 500, fontSize: 16 }}>Street</Typography>

                                    <input className="inputCls" name="street" id="street" type="text" value={street} onChange={handleChangeInput} required style={{ boxShadow: "1px 1px 15px 1px #cfd1d4 ", paddingLeft: 15 }} />
                                    <br />
                                </Grid>
                            </Grid>

                            <Grid xs={12} sm={6} style={{ padding: 10 }} >
                                {/* <Typography style={{ fontWeight: 500, fontSize: 16 }}>City</Typography>
                                <InputBase style={{ boxShadow: "1px 1px 15px 1px #cfd1d4 ", paddingLeft: 15 }} className="item_input" type="text" name="city" id="city" required
                                    value={city} onChange={handleChangeInput}  /> */}
                                <Grid style={{ paddingTop: 10, textAlign: "left" }}>
                                    <Typography style={{ fontWeight: 500, fontSize: 16 }}>City</Typography>

                                    <input className="inputCls" name="city" id="city" type="text" value={city} onChange={handleChangeInput} required style={{ boxShadow: "1px 1px 15px 1px #cfd1d4 ", paddingLeft: 15 }} />
                                    <br />
                                </Grid>
                            </Grid>
                            <Grid xs={12} sm={6} style={{ padding: 10 }}>
                                {/* <Typography style={{ fontWeight: 500, fontSize: 16 }}>Province</Typography>
                                <InputBase style={{ boxShadow: "1px 1px 15px 1px #cfd1d4 ", paddingLeft: 15 }} className="item_input" type="text" name="province" id="province" required
                                    value={province} onChange={handleChangeInput} /> */}
                                <Grid style={{ paddingTop: 10, textAlign: "left" }}>
                                    <Typography style={{ fontWeight: 500, fontSize: 16 }}>Province</Typography>

                                    <input className="inputCls" name="province" id="province" type="text" value={province} onChange={handleChangeInput} required style={{ boxShadow: "1px 1px 15px 1px #cfd1d4 ", paddingLeft: 15 }} />
                                    <br />
                                </Grid>
                            </Grid>
                            <Grid xs={12} sm={6} style={{ padding: 10 }}>
                                {/* <Typography style={{ fontWeight: 500, fontSize: 16 }}>ZIP CODE</Typography>
                                <InputBase style={{ boxShadow: "1px 1px 15px 1px #cfd1d4 ", paddingLeft: 15 }} className="item_input" type="number" name="zip" id="zip" required
                                    value={zip} onChange={handleChangeInput}  /> */}
                                <Grid style={{ paddingTop: 10, textAlign: "left" }}>
                                    <Typography style={{ fontWeight: 500, fontSize: 16 }}>Zip Code</Typography>

                                    <input className="inputCls" name="zip" id="zip" type="number" value={zip} onChange={handleChangeInput} required style={{ boxShadow: "1px 1px 15px 1px #cfd1d4 ", paddingLeft: 15 }} />
                                    <br />
                                </Grid>

                            </Grid>
                        </Grid>

                        <Grid className="row" style={{ padding: 10 }}>
                            <Grid style={{ paddingTop: 10, textAlign: "left" }}>
                                <Typography style={{ fontWeight: 500, fontSize: 16 }}>Categories: </Typography>
                                <select style={{ boxShadow: "1px 1px 15px 1px #cfd1d4 ", paddingLeft: 15 }} className="inputCls" name="category" value={category} onChange={handleChangeInput} >
                                    <option value=""> -- Please select a category --</option>
                                    <option value="vehicles">Vehicles</option>
                                    <option value="residencies">Residences</option>
                                    <option value="cloths">Cloths | Dresses</option>
                                    <option value="gardenequipment">Garden Equipments</option>
                                    <option value="mechanicaltool">Mechanical Tools</option>
                                    <option value="books">Books</option>
                                    <option value="sportskits">Sports kits</option>
                                    <option value="electronics">Electronic Products</option>
                                    <option value="merchandise">Merchandise Product</option>
                                </select>
                            </Grid>
                        </Grid>

                        {item.category === 'vehicles' ?
                            <Vehicle onSubmit={handleSubmit} /> :
                            item.category === 'residencies' ?
                                <Residencies onSubmit={handleSubmit} />
                                : null}

                        <div className="row" style={{ padding: 10 }}>
                            <Typography style={{ fontWeight: 500, fontSize: 17 }}>Description</Typography>
                            <textarea className="inputCls" style={{ boxShadow: "1px 1px 15px 1px #cfd1d4 ", padding: 15 }} className="inputCls" type="text" name="description" id="description" required
                                value={description} rows="5" onChange={handleChangeInput} />
                        </div>

                        <div className="row" style={{ padding: 10 }}>
                            <Typography style={{ fontWeight: 500, fontSize: 17 }}>Content</Typography>
                            <textarea className="inputCls" style={{ boxShadow: "1px 1px 15px 1px #cfd1d4 ", padding: 15 }} className="inputCls" type="text" name="content" id="content" required
                                value={content} rows="7" onChange={handleChangeInput} />
                        </div>

                        {/* <UploadImage /> */}

                        <Grid item container xs={6} sm={6} style={{ padding: '10px 10px 0 0' }}>
                            <MultiImageInput
                                images={images}
                                setImages={setImages}
                            />
                            {/* <input type="file" name="file" id="file_up" onChange={handleUpload} /> */}
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

export default ItemShareForm