import Link from "next/link";
import { Col, div } from "react-bootstrap";
import styles from "../../styles/blogs-list.module.css";
import formatDate from "../../utils/date";
import PostItem from "./PostItem";

export default function BlogsList({ items }) {

  return items.map((item) => (
    <PostItem key={item.slug} item={item}/>
  ));
}
