import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

const Notify = ({ alerts }) => {
	if (!alerts || alerts.length === 0) return null // Ensure alerts exist

	return alerts.map(alert => (
		<div key={alert.id} className={`alert alert-${alert.alertType}`}>
			{alert.msg}
		</div>
	))
}

Notify.propTypes = {
	alerts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
	alerts: state.alert // Make sure your reducer returns `alert`
})

export default connect(mapStateToProps)(Notify)
