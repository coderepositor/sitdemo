import React from 'react'
class FormattedDate extends React.Component{
constructor(props){
    super(props)
}
format(val){
   const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
   let parsed_date = new Date(Date.parse(val))
   let formatted_date = parsed_date.getDate() + "-"+months[parsed_date.getMonth()] + "-" + parsed_date.getFullYear()
   return formatted_date
}
render(){
    return(
        <span>{this.format(this.props.value)}</span>
    )
}
}

export default FormattedDate