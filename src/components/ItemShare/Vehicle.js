import React, { useState } from 'react';
import { Grid, Switch, Typography } from '@material-ui/core';
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

function Vehicle() {

  const [item, setItem] = useState(initialState);

  const handleChangeInput = e => {
    const { name, value } = e.target
    setItem({ ...item, [name]: value })
  }

  return (
    <div>
      <Grid container xs={12} sm={12}>
        <Grid
          direction="row"
          justify="center"
          alignItems="center" xs={12} sm={12} md={12} lg={12}>
          <div className="row">
            <Typography style={{fontWeight:500, fontSize:16}}>Choose your vehicle type: </Typography>
            <select className="item_input" name="subcategory" value={item.subcategory} onChange={handleChangeInput} >
              <option value="">Please select a vehicle type</option>
              <option value="bike">Bike</option>
              <option value="threewheeler">Three Wheeler</option>
              <option value="car">Car</option>
              <option value="van">Van</option>
              <option value="van">Van</option>
              <option value="bus">Bus</option>
              <option value="lorry">lorry</option>
              <option value="container">Heavy Load Container</option>
              <option value="other">Other</option>
            </select>
          </div>
        </Grid>
        <Grid container xs={12} sm={12}>
          <Grid
            direction="row"
            justify="flex-start"
            alignItems="center" xs={12} sm={12} md={12} lg={12}>
            <Typography style={{ fontWeight: 500, fontSize: 16 }}>Amenities: </Typography>
          </Grid>
          <Grid container
            direction="row"
            justify="flex-start"
            alignItems="center" xs={6} sm={6} md={6} lg={6}>
            <div className="row">
            <Typography style={{ fontWeight: 500, fontSize: 16 }}>Doors : </Typography>
              <input className="feature_input" type="number" name="price" id="price" required
                value={item.price} onChange={handleChangeInput} />
            </div>
          </Grid>
          <Grid container
            direction="row"
            justify="flex-start"
            alignItems="center" xs={6} sm={6} md={6} lg={6}>
            <div className="row">
            <Typography style={{ fontWeight: 500, fontSize: 16 }}>Seats : </Typography>
              <input className="feature_input" type="number" name="price" id="price" required
                value={item.price} onChange={handleChangeInput} />
            </div>
          </Grid>
          <Grid container
            direction="row"
            justify="flex-start"
            alignItems="center" xs={6} sm={6} md={6} lg={6}>
            <div className="row">
            <Typography style={{ fontWeight: 500, fontSize: 16 }}>Fules(MPG) : </Typography>
              <input className="feature_input" type="number" name="price" id="price" required
                value={item.price} onChange={handleChangeInput} />
            </div>
          </Grid>
          <Grid container
            direction="row"
            justify="flex-start"
            alignItems="center" xs={6} sm={6} md={6} lg={6}>
            <div className="row">
            <Typography style={{ fontWeight: 500, fontSize: 16 }}>Cubic Capacity(CC) : </Typography>
              <input className="feature_input" type="number" name="price" id="price" required
                value={item.price} onChange={handleChangeInput} />
            </div>
          </Grid>
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
              <Typography style={{ fontWeight: 500, fontSize: 14 }}>Must be 21+ to book </Typography>
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
              <Typography style={{ fontWeight: 500, fontSize: 14 }}>Automatic transmission </Typography></Grid>
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
              <Typography style={{ fontWeight: 500, fontSize: 14 }}>AUX input </Typography></Grid>
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
              <Typography style={{ fontWeight: 500, fontSize: 14 }}>All-wheel drive </Typography></Grid>
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
              <Typography style={{ fontWeight: 500, fontSize: 14 }}>Child seat </Typography></Grid>
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
              <Typography style={{ fontWeight: 500, fontSize: 14 }}>Convertible </Typography></Grid>
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
              <Typography style={{ fontWeight: 500, fontSize: 14 }}>Keyless entry </Typography></Grid>
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
              <Typography style={{ fontWeight: 500, fontSize: 14 }}>Long-term car </Typography></Grid>
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
              <Typography style={{ fontWeight: 500, fontSize: 14 }}>Snow tires or chains </Typography></Grid>
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
              <Typography style={{ fontWeight: 500, fontSize: 14 }}>Sunroof </Typography>
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
              <Typography style={{ fontWeight: 500, fontSize: 14 }}>USB charger </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid items container xs={12} sm={12} md={12} lg={12} style={{paddingTop:20}}>
          <Grid xs={12} sm={12}><Typography style={{ fontWeight: 500, fontSize: 17 }}>Policies </Typography></Grid>
          <Grid xs={12} sm={12}><AddInput /></Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Vehicle;
