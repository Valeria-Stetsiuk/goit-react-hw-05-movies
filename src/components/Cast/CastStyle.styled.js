import styled from 'styled-components';

export const Cast = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
export const CastItem = styled.li`
  width: calc((100% - 40px) / 5);
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  color: #fff;
  font-weight: 500;
`;
export const Avatar = styled.img`
  width: 100px;
  height: 150px;
  object-fit: cover;
`;
