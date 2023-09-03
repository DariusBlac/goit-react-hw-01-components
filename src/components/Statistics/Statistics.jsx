import { ListContainer, ListItem, Title } from './Statistics.styled';
import { getRandomHexColor } from 'js/randomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <Title>{title}</Title>}

      <ListContainer>
        {stats.map(elem => {
          return (
            <ListItem
              className="item"
              key={elem.id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className="label">{elem.label}</span>
              <span className="percentage">{elem.percentage}%</span>
            </ListItem>
          );
        })}
      </ListContainer>
    </section>
  );
};
