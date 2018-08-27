import React, { Component } from 'react';
import { database } from '../firebase';
import _ from 'lodash';
import { connect } from 'react-redux'
import { getNotes, saveNote } from '../actions/notesAction';

class App extends Component {

  state = {
    title: '',
    body: '',
    notes: {}
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = () => {
    const { title, body } = this.state
    const note = {
      title: title,
      body: body
    }
    this.props.saveNote(note);
    this.setState({
      title: '',
      body: ''
    })
  }
  componentDidMount() {
    this.props.getNotes();
  }


  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form >
              <div style={{ marginBottom: 8 }} className="from-group">
                <input
                  onChange={this.handleChange}
                  value={this.state.title}
                  type="text"
                  name="title"
                  className="form-control no-border"
                  placeholder="Title..."
                  required
                />
              </div>
              <div style={{ marginBottom: 8 }} className="from-group">
                <textarea
                  onChange={this.handleChange}
                  type="textarea"
                  value={this.state.body}
                  name="body"
                  className="form-control no-border"
                  placeholder="Body..."
                  required
                />
              </div>
              <div className="from-group">
                <button onClick={this.handleSubmit} type="button" className="btn btn-outline-success">Success</button>
              </div>
            </form>
            <div>
              {
                _.map(this.props.notes, (note, key) => {
                  return (
                    <div key={key}>
                      <h2>{note.title}</h2>
                      <p>{note.body}d</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    notes: state.notes
  }
}

/*const mapDispatchToProps = {
  getNotes,
  saveNotes
}*/


export default connect(mapStateToProps, { getNotes, saveNote })(App);
