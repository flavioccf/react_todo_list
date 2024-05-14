import styles from "./TodoSummary.module.css";

export function TodoSummary({ totalTasks = 0, concludedTasks = 0 }) {
  return (
    <div className={styles.todoSummaryWrapper}>
      <p>
        Created Tasks <span>{totalTasks}</span>
      </p>
      <p>
        Done{" "}
        <span>
          {concludedTasks > 0
            ? `${concludedTasks} of ${totalTasks}`
            : concludedTasks}
        </span>
      </p>
    </div>
  );
}
