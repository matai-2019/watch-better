import React from 'react'
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, TextField, Button } from '@material-ui/core'

class Quiz extends React.Component {

  state = {
    title: '',
    isVisible: false
  }

  handleName = e => {
    this.setState({
      title: e.target.value
    })
  }

  render () {
    return (
      <div >
        <TextField
          id="standard-search"
          label="Movie Title"
          type="search"
          // className={classes.textField}
          margin="normal"
          onChange={this.handleName}
        />
        <Button onClick={() => this.setState({ isVisible: true })}variant="outlined" color="primary">Start</Button>
        <br />
        <br />
        <FormControl component="fieldset">
          <FormLabel component="legend">Does {this.state.title} have two women, that at some point have a conversation with each other?</FormLabel>
          <RadioGroup
            aria-label="Bechdel"
          // className={classes.group}
          // value={value}
          // onChange={handleChange}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <br/>
        <FormControl component="fieldset">
          <FormLabel component="legend">Is this conversation about something other than a man?</FormLabel>
          <RadioGroup
            aria-label="Bechdel"
          // className={classes.group}
          // value={value}
          // onChange={handleChange}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <br/>

        <FormControl component="fieldset">
          <FormLabel component="legend">Does {this.state.title} have at least two women in each department of movie production?</FormLabel>
          <RadioGroup
            aria-label="Rees Davies"
          // className={classes.group}
          // value={value}
          // onChange={handleChange}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
            <FormControlLabel value="I don't know" control={<Radio />} label="I don't know" />
          </RadioGroup>
        </FormControl>
        <br/>

        <FormControl component="fieldset">
          <FormLabel component="legend">Is there a female identifying person in the film who is non-white?</FormLabel>
          <RadioGroup
            aria-label="Ko"
          // className={classes.group}
          // value={value}
          // onChange={handleChange}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <br/>

        <FormControl component="fieldset">
          <FormLabel component="legend">Does that person speak in at least five scenes?</FormLabel>
          <RadioGroup
            aria-label="Ko"
          // className={classes.group}
          // value={value}
          // onChange={handleChange}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <br/>

        <FormControl component="fieldset">
          <FormLabel component="legend">Do they speak English?</FormLabel>
          <RadioGroup
            aria-label="Ko"
          // className={classes.group}
          // value={value}
          // onChange={handleChange}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <br/>

        <FormControl component="fieldset">
          <FormLabel component="legend">Is there a primary female character?</FormLabel>
          <RadioGroup
            aria-label="Landau"
          // className={classes.group}
          // value={value}
          // onChange={handleChange}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <br/>

        <FormControl component="fieldset">
          <FormLabel component="legend">Do they end up dead or pregnant?</FormLabel>
          <RadioGroup
            aria-label="Landau"
          // className={classes.group}
          // value={value}
          // onChange={handleChange}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <br/>

        <FormControl component="fieldset">
          <FormLabel component="legend">Do they ever cause a plot problem for a male protagonist? </FormLabel>
          <RadioGroup
            aria-label="Landau"
          // className={classes.group}
          // value={value}
          // onChange={handleChange}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <br/>

        <FormControl component="fieldset">
          <FormLabel component="legend">Is the director of {this.state.title} female? </FormLabel>
          <RadioGroup
            aria-label="Feldman"
          // className={classes.group}
          // value={value}
          // onChange={handleChange}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <br/>

        <FormControl component="fieldset">
          <FormLabel component="legend">Is there a female writer? </FormLabel>
          <RadioGroup
            aria-label="Feldman"
          // className={classes.group}
          // value={value}
          // onChange={handleChange}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <br/>

        <FormControl component="fieldset">
          <FormLabel component="legend">Is there a female composer or director of photography? </FormLabel>
          <RadioGroup
            aria-label="Feldman"
          // className={classes.group}
          // value={value}
          // onChange={handleChange}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <br/>

        <FormControl component="fieldset">
          <FormLabel component="legend">Are there at least three female producers or three female department heads?</FormLabel>
          <RadioGroup
            aria-label="Feldman"
          // className={classes.group}
          // value={value}
          // onChange={handleChange}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
            <FormControlLabel value="I don't know" control={<Radio />} label="I don't know" />
          </RadioGroup>
        </FormControl>
        <br/>

        <FormControl component="fieldset">
          <FormLabel component="legend">Is the crew at least 50% women?</FormLabel>
          <RadioGroup
            aria-label="Feldman"
          // className={classes.group}
          // value={value}
          // onChange={handleChange}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
            <FormControlLabel value="I don't know" control={<Radio />} label="I don't know" />

          </RadioGroup>
        </FormControl>
        <br/>

        <FormControl component="fieldset">
          <FormLabel component="legend">Is there a female protagonist that determines story outcomes?</FormLabel>
          <RadioGroup
            aria-label="Feldman"
          // className={classes.group}
          // value={value}
          // onChange={handleChange}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <br/>

        <FormControl component="fieldset">
          <FormLabel component="legend">Are any female characters victimized, stereotyped or sexualized?</FormLabel>
          <RadioGroup
            aria-label="Feldman"
          // className={classes.group}
          // value={value}
          // onChange={handleChange}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <br/>

        <FormControl component="fieldset">
          <FormLabel component="legend">Is there a female character that initiates or reciprocates sexual?</FormLabel>
          <RadioGroup
            aria-label="Feldman"
          // className={classes.group}
          // value={value}
          // onChange={handleChange}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </div>
 
    )
  }
}

export default Quiz