import '../stylesheets/ui.scss'
import * as Material from 'react-icons/lib/md'

const percentToDecimal = (decimal) => {
	return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
	return percentToDecimal(total/goal)
}

export const SkiDayCount = ({total, powder, backcountry, goal}) => (
		<div className="ski-day-count">      
			<div className="total-days">
        <Material.MdToday />
				<span>{total}</span>
				<span>days</span>
			</div>
			<div className="powder-days">
        <Material.MdAcUnit />
				<span>{powder}</span>
				<span>days</span>
			</div>
			<div className="backcountry-days">
        <Material.MdTerrain />
				<span>{backcountry}</span>
				<span>days</span>
			</div>
			<div>
				<span>
					{calcGoalProgress(
						total, 
						goal
					)}
				</span>
			</div>
		</div>
)
