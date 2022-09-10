import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import styles from "../../styles/blogs-list.module.css";

export default function BlogsList({ items }) {
  return items.map((item) => (
    <Link key={item.slug} href={`/blog/${item.slug}`}>
      <a className={styles.link}>
        <Row className="pb-4">
          <Row className="pb-2">
            <span className={styles.blogTitle}>{item.title}</span>
          </Row>
          <Row>
            <Col xs="auto">
              <span className={styles.blogDate}>{item.date}</span>
            </Col>
            <Col xs="auto">
              {item.tags.map((item) => (
                <div key={item} className={styles.blogTag}>
                  {item}
                </div>
              ))}
            </Col>
          </Row>
        </Row>
      </a>
    </Link>
  ));
}
