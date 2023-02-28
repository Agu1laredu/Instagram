import React, { Fragment, useEffect, useState } from "react";
import { Category } from "../Category";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { List, Item } from "./styles";

export function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [Loading, setLoading] = useState(false);

  //fetch Categories
  useEffect(function () {
    setLoading(true);
    fetch("https://petgram-server-leidy-daza-leidydaza.vercel.app/categories")
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
        setLoading(false);
      });
  }, []);
  return { categories, Loading };
}

export const ListOfCategories = () => {
  const { categories, Loading } = useCategoriesData();
  const [showFixed, setShowFixed] = useState(false);

  //categoires show  scroll
  useEffect(function () {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  });

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {Loading ? (
        <Item key="loading">
          <AiOutlineLoading3Quarters
            style={{
              position: "absolute",
              left: "40%",
              top: "10%",
              fontSize: "80px",
            }}
          />
        </Item>
      ) : (
        categories.map((category) => (
          <Item key={category.id}>
            <Category {...category} />
          </Item>
        ))
      )}
    </List>
  );

  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  );
};
