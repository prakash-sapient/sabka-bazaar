import React from "react";
import { CategoryItem } from "app/core/models/interfaces/CategoryItem";
import { CategoryService } from "app/core/services/category.service";
import { Form } from "react-bootstrap";
import colors from "app/theme/colors";
import styled from "styled-components";
import breakpoints from "app/theme/breakpoints";

const Sidebar: React.FC<any> = () => {
  const categoryService = new CategoryService();
  const [filterItems, setFilterItems] = React.useState<CategoryItem[]>([]);

  React.useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () =>
    categoryService.getCategory().then((res: any) => {
      console.log("res", res);
      setFilterItems(res);
    });
  return (
    <React.Fragment>
      <SidebarContainer>
        <SidebarMenu id="sidebar" aria-label="Product Filter">
          {filterItems.length > 0 &&
            filterItems.map((elem, index) => (
              <SidebarMenuItem key={`product_filter_${elem.id}`}>
                {elem.name}
              </SidebarMenuItem>
            ))}
        </SidebarMenu>
      </SidebarContainer>

      <FormSelect aria-label="Default select example">
        {filterItems.length > 0 &&
          filterItems.map((elem, index) => (
            <option key={`product_filter-dropdown_${elem.id}`}>
              {elem.name}
            </option>
          ))}
      </FormSelect>
    </React.Fragment>
  );
};

export default React.memo(Sidebar);

const SidebarContainer = styled.aside`
  display: none;
  @media screen and (min-width: ${breakpoints.md}) {
    background-color: ${colors.fadeGray};
    min-height: calc(100vh - 100px);
    height: 100%;
    display: block;
  }
`;

const SidebarMenu = styled.ul`
  padding-left: 15px;
  list-style: none;
  cursor: pointer;
`;

const SidebarMenuItem = styled.li`
  border-bottom: 1px solid ${colors.divider};
  padding: 15px;
  font-weight: bold;
  text-transform: capitalize;
`;

const FormSelect = styled(Form.Select)`
  display: none;
  @media screen and (max-width: ${breakpoints.md}) {
    display: block;
  }
`;
