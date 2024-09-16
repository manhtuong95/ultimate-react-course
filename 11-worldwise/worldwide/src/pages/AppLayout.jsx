import Sidebar from "../../../final/src/components/Sidebar";
import User from "../../../final/src/components/User";
import styles from "./AppLayout.module.css";

function AppLayout() {
	return (
		<div className={styles.app}>
			<Sidebar />
			<User />
		</div>
	);
}

export default AppLayout;
