import React, { Component } from "react";
import "./input-sytle.css";

export default class SearchBar extends Component {
  state = {
    breed: "",
    // anotherfolder: {},
    arrowStyles: {
      display: "inline-block",
      width: 0,
      height: 0,
      borderRight: "5px solid transparent",
      borderLeft: "5px solid transparent",
      borderTop: "5px solid black",
      marginRight: 5,
    },
  };
  mock = {
    type: "directory",
    name: "hello",
    children: [
      {
        type: "directory",
        name: "world",
        children: [
          {
            type: "directory",
            name: "anotherfolder",
            children: [
              {
                type: "file",
                name: "sample.txt",
              },
              {
                type: "file",
                name: "mock.txt",
              },
            ],
          },
          {
            type: "file",
            name: "one.txt",
          },
          {
            type: "file",
            name: "two.txt",
          },
        ],
      },
      {
        type: "file",
        name: "README",
      },
    ],
  };
  downTriangle = {
    display: "inline-block",
    width: 0,
    height: 0,
    borderRight: "5px solid transparent",
    borderLeft: "5px solid transparent",
    borderTop: "5px solid black",
    marginRight: 5,
  };
  upTriangle = {
    display: "inline-block",
    width: 0,
    height: 0,
    borderRight: "5px solid transparent",
    borderLeft: "5px solid transparent",
    borderBottom: "5px solid black",
    marginRight: 5,
  };
  closeOrOpenTree = (e) => {
    let id = e.target.id;
    let key = id + "child";
    let arrowkey = id + "arrow";
    let x = document.getElementById(key);
    let y = document.getElementById(arrowkey);

    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.cssText =
        "display: inline-block;width: 0;height: 0;border-right: 5px solid transparent;border-left: 5px solid transparent;border-top: 5px solid black;marginRight: 5";
    } else {
      x.style.display = "none";
      y.style.cssText =
        "display: inline-block;width: 0;height: 0;border-right: 5px solid transparent;border-left: 5px solid transparent;border-bottom: 5px solid black;marginRight: 5";
    }
  };
  callDirectory = (directory, directoryName, currentPadding) => {
    let key = directoryName + "child";
    return (
      <div className="second" style={{ paddingLeft: currentPadding + 10 }}>
        <div>
          <span id={directoryName + "arrow"} style={this.downTriangle} />
          <b
            id={directoryName}
            style={{ cursor: "pointer" }}
            onClick={(e) => this.closeOrOpenTree(e)}
          >
            {directoryName}
          </b>
        </div>
        <div id={directoryName + "child"}>
          {directory.map((item) => {
            {
              return item.type === "directory" ? (
                this.callDirectory(item.children, item.name, 10)
              ) : (
                <div>{item.name}</div>
              );
            }
          })}
        </div>
      </div>
    );
  };

  formFIles = () => {
    console.log("came hree");
    return (
      <div className="first">
        {this.mock.type === "directory" ? (
          this.callDirectory(this.mock.children, this.mock.name)
        ) : (
          <div>{this.mock.name}</div>
        )}
      </div>
    );
  };
  setBreeNameState = (e) => {
    console.log("event ", e);
    this.setState({ breed: e.target.value });

    this.props.callFetchApi(e.target.value);
  };
  render() {
    return (
      <div>
        <div className="first">
          {this.mock.type === "directory" ? (
            this.callDirectory(this.mock.children, this.mock.name, 0)
          ) : (
            <div>{this.mock.name}</div>
          )}
        </div>
        <input
          placeholder="Breed"
          value={this.state.breed}
          onChange={this.setBreeNameState}
        />
      </div>
    );
  }
}
