import './header.css'
import chefClaudeImg from '/src/assets/chef-claude-icon.png'

export default function Header(){
    return (
        <header>
            <img src={chefClaudeImg} alt="Claude chef" />
            <p>Chef AI</p>
        </header>
    );
}