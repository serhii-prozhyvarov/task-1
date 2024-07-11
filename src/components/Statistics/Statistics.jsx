import { Label, Percentage, Section, StatItem, StatList, Title } from "./Statistics.styled";
import { getRandomHexColor } from './getRandomHexColor';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
    // console.log(stats)
    return (
      <Section>
        {title && <Title>Uploads stats</Title>}
        <StatList>
          {stats.map(stat => (
            <StatItem
              key={stat.id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <Label>{stat.label}</Label>
              <Percentage>{stat.percentage}%</Percentage>
            </StatItem>
          ))}
        </StatList>
      </Section>
    );
}
export default Statistics

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
}