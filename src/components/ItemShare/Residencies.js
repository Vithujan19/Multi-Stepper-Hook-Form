import React, { useState } from 'react';
import { Grid, Switch } from '@material-ui/core';
import AddInput from './AddInput';

const initialState = {
  item_id: '',
  title: '',
  price: 0,
  description: 'A small description about your items..',
  content: 'Add your Amenities..',
  category: '',
  subcategory: '',
  _id: ''
}

function Residencies() {

  const [item, setItem] = useState(initialState);

  const handleChangeInput = e => {
    const { name, value } = e.target
    setItem({ ...item, [name]: value })
  }

  return (
    <div>
      <Grid container xs={12} sm={12}>
      <Grid container xs={12} sm={12}>
        <label>Add you policies here</label>
      </Grid>
        <Grid
          direction="row"
          justify="center"
          alignItems="center" xs={12} sm={12} md={12} lg={12}>
          <div className="row">
            <label htmlFor="subcategory">Choose your residential type: </label>
            <select className="item_input" name="subcategory" value={item.subcategory} onChange={handleChangeInput} >
              <option value="">Please select a residential type</option>
              <option value="hut">Hut</option>
              <option value="hotel">Hotel</option>
              <option value="flat">Flat</option>
              <option value="house">House</option>
              <option value="beachResort">Beach Resort</option>
              <option value="camp">Camping</option>
              <option value="container">Container Home</option>
              <option value="other">Other</option>
            </select>
          </div>
        </Grid>
        <Grid container xs={12} sm={12}>
          <Grid
            direction="row"
            justify="flex-start"
            alignItems="center" xs={12} sm={12} md={12} lg={12}>
            <label htmlFor="features">Amenities: </label>
          </Grid>
          <Grid container
            direction="row"
            justify="flex-start"
            alignItems="center" xs={6} sm={6} md={6} lg={6}>
            <div className="row">
              <label htmlFor="price">Bath : </label><br />
              <input className="feature_input" type="number" name="price" id="price" required
                value={item.price} onChange={handleChangeInput} />
            </div>
          </Grid>
          <Grid container
            direction="row"
            justify="flex-start"
            alignItems="center" xs={6} sm={6} md={6} lg={6}>
            <div className="row">
              <label htmlFor="price">Bedroom : </label><br />
              <input className="feature_input" type="number" name="price" id="price" required
                value={item.price} onChange={handleChangeInput} />
            </div>
          </Grid>
          {/* <Grid container
            direction="row"
            justify="flex-start"
            alignItems="center" xs={6} sm={6} md={6} lg={6}>
            <div className="row">
              <label htmlFor="price">Fules(MPG) : </label><br />
              <input className="feature_input" type="number" name="price" id="price" required
                value={item.price} onChange={handleChangeInput} />
            </div>
          </Grid>
          <Grid container
            direction="row"
            justify="flex-start"
            alignItems="center" xs={6} sm={6} md={6} lg={6}>
            <div className="row">
              <label htmlFor="price">Cubic Capacity(CC) : </label><br />
              <input className="feature_input" type="number" name="price" id="price" required
                value={item.price} onChange={handleChangeInput} />
            </div>
          </Grid> */}
          <Grid items container xs={12} sm={12} md={12} lg={12}>
            <Grid container
              direction="row"
              justify="flex-start"
              alignItems="center" xs={6} sm={6} md={6} lg={6}>
              <Grid container xs={4} sm={3} md={2} lg={2}>
                <Switch
                  value={item.wifi}
                  onChange={handleChangeInput}
                  name="checkedA"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid xs={8} sm={9} md={10} lg={10} style={{ paddingLeft: 5 }}>
                <label htmlFor="price">Kitchen </label>
              </Grid>
            </Grid>
            <Grid container
              direction="row"
              justify="flex-start"
              alignItems="center" xs={6} sm={6} md={6} lg={6}>
              <Grid container xs={4} sm={3} md={2} lg={2}>
                <Switch
                  value={item.wifi}
                  onChange={handleChangeInput}
                  name="checkedA"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid xs={8} sm={9} md={10} lg={10} style={{ paddingLeft: 5 }}>
                <label htmlFor="price">Balcony </label></Grid>
            </Grid>
            <Grid container
              direction="row"
              justify="flex-start"
              alignItems="center" xs={6} sm={6} md={6} lg={6}>
              <Grid container xs={4} sm={3} md={2} lg={2}>
                <Switch
                  value={item.wifi}
                  onChange={handleChangeInput}
                  name="checkedA"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid xs={8} sm={9} md={10} lg={10} style={{ paddingLeft: 5 }}>
                <label htmlFor="price">Swimming Pool </label></Grid>
            </Grid>
            <Grid container
              direction="row"
              justify="flex-start"
              alignItems="center" xs={6} sm={6} md={6} lg={6}>
              <Grid container xs={4} sm={3} md={2} lg={2}>
                <Switch
                  value={item.wifi}
                  onChange={handleChangeInput}
                  name="checkedA"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid xs={8} sm={9} md={10} lg={10} style={{ paddingLeft: 5 }}>
                <label htmlFor="price">Wifi </label></Grid>
            </Grid>
            <Grid container
              direction="row"
              justify="flex-start"
              alignItems="center" xs={6} sm={6} md={6} lg={6}>
              <Grid container xs={4} sm={3} md={2} lg={2}>
                <Switch
                  value={item.wifi}
                  onChange={handleChangeInput}
                  name="checkedA"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid xs={8} sm={9} md={10} lg={10} style={{ paddingLeft: 5 }}>
                <label htmlFor="price">Free Parking </label></Grid>
            </Grid>
            <Grid container
              direction="row"
              justify="flex-start"
              alignItems="center" xs={6} sm={6} md={6} lg={6}>
              <Grid container xs={4} sm={3} md={2} lg={2}>
                <Switch
                  value={item.wifi}
                  onChange={handleChangeInput}
                  name="checkedA"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid xs={8} sm={9} md={10} lg={10} style={{ paddingLeft: 5 }}>
                <label htmlFor="price">Cable TV </label></Grid>
            </Grid>
            <Grid container
              direction="row"
              justify="flex-start"
              alignItems="center" xs={6} sm={6} md={6} lg={6}>
              <Grid container xs={4} sm={3} md={2} lg={2}>
                <Switch
                  value={item.wifi}
                  onChange={handleChangeInput}
                  name="checkedA"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid xs={8} sm={9} md={10} lg={10} style={{ paddingLeft: 5 }}>
                <label htmlFor="price">Washing Machine </label></Grid>
            </Grid>
            <Grid container
              direction="row"
              justify="flex-start"
              alignItems="center" xs={6} sm={6} md={6} lg={6}>
              <Grid container xs={4} sm={3} md={2} lg={2}>
                <Switch
                  value={item.wifi}
                  onChange={handleChangeInput}
                  name="checkedA"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid xs={8} sm={9} md={10} lg={10} style={{ paddingLeft: 5 }}>
                <label htmlFor="price">Smoke alarm </label></Grid>
            </Grid>
            <Grid container
              direction="row"
              justify="flex-start"
              alignItems="center" xs={6} sm={6} md={6} lg={6}>
              <Grid container xs={4} sm={3} md={2} lg={2}>
                <Switch
                  value={item.wifi}
                  onChange={handleChangeInput}
                  name="checkedA"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid xs={8} sm={9} md={10} lg={10} style={{ paddingLeft: 5 }}>
                <label htmlFor="price">Heater </label></Grid>
            </Grid>
            <Grid container
              direction="row"
              justify="flex-start"
              alignItems="center" xs={6} sm={6} md={6} lg={6}>
              <Grid container xs={4} sm={3} md={2} lg={2}>
                <Switch
                  value={item.wifi}
                  onChange={handleChangeInput}
                  name="checkedA"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid xs={8} sm={9} md={10} lg={10} style={{ paddingLeft: 5 }}>
                <label htmlFor="price">Air Conditioner </label>
              </Grid>
            </Grid>
            <Grid container
              direction="row"
              justify="flex-start"
              alignItems="center" xs={6} sm={6} md={6} lg={6}>
              <Grid container xs={4} sm={3} md={2} lg={2}>
                <Switch
                  value={item.wifi}
                  onChange={handleChangeInput}
                  name="checkedA"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid xs={8} sm={9} md={10} lg={10} style={{ paddingLeft: 5 }}>
                <label htmlFor="price">Long Stay </label>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid items container xs={12} sm={12} md={12} lg={12}>
          <Grid xs={12} sm={12}><label htmlFor="policy">Policies </label></Grid>
          <Grid xs={12} sm={12}><AddInput /></Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Residencies;
