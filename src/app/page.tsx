import block from 'bem-cn-lite';
import './Home.scss';
const b = block('wrapper');
export default function Home() {
    return (
        <main className={b()}>
            <h3>Site under development</h3>
            <p>by My favorite team</p>
        </main>
    );
}
