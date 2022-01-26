import './ProgressBar.css';

const ProgressBar = ({ title, goal, done }) => {

    const getProgress = (goal, done) =>
        Math.floor(done / goal * 100)

    return (
        <div className='progress-bar'>
            <div className='progress' style={{ width: `${getProgress(goal, done)}%` }}></div>
            <div className='title'>{`${title} ${done}/${goal}`}</div>
        </div >
    )
}

export default ProgressBar;