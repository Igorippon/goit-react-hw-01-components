import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ stats, title }) => {
  return (
    <section className={css.statistics}>
      {title && (<h2 className={css.title}>{title}</h2>)}
      <ul className={css.list}>
        {stats.map(({ id, label, percentage }) => (
         <StatisticsItem
          key={id}
          label={label}
          percentage={percentage}
         />
        ))}
      </ul>
    </section>
  );
};

const StatisticsItem = ({label,percentage}) =>{
  return( <li  className={css.item} style={{ backgroundColor: getRandomHexColor() }}>
  <span className={css.label}>{label}</span>
  <span className={css.percentage}>{percentage}</span>
</li>);
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

StatisticsItem.propTypes = {
  label:PropTypes.string.isRequired,
  percentage:PropTypes.number.isRequired,
}

