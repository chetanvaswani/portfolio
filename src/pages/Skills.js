import React from "react";
import { LineNumbers, Blue, White, Yellow } from "../../src/Pages.js";
import './Skills.css';

export default function Skills(){
    return (
      <div className='skills-page'>
          <LineNumbers length={20} />
          <p>Skills page</p>
      </div>
    )
}

/* 
class skill:
  def __init__(self, _name):
    self._name = name

    @property
    def name(self):
      return self._name

    @name.setter
    def name(self, _name):
      self.name = _name
*/