import React from 'react'
import { render } from 'react-dom'
import { SkiDayList } from './components/SkiDayList'

window.React = React

render(
	<SkiDayList days={[
    {
      resort: "Squaw Valley",
      date: new Date('10/12/2006'),
      powder: true,
      backcountry: true
    },
    {
      resort: "Kirkwood",
      date: new Date('1/1/2017'),
      powder: false,
      backcountry: true
    },
    {
      resort: "MogTown",
      date: new Date('3/3/2010'),
      powder: false,
      backcountry: false
    }
  ]} />,
	document.getElementById('react-container')
)