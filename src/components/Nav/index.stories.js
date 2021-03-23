import Recat from 'react'
import { NavBar} from './index'

export default {
    title: 'NavBar',
    component: 'NavBar'
}

const Template = (args) => <NavBar {...args} />

export const Default = Template.bind({})