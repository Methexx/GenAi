/* style.css */
body {
    font-family: 'Raleway', sans-serif;
    margin: 0;
    line-height: 1.6;
    background-color: #1a1a1a;
    color: #e0e0e0;
    min-height: 100vh;
    padding: 2rem;
}

.container {
    max-width: 800px;
    margin: 0 auto;
}

.section {
    margin-bottom: 25px;
    padding: 25px;
    border-radius: 12px;
    background-color: #2d2d2d;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s, box-shadow 0.2s;
}

.section:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

h1 {
    color: #fff;
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

h2 {
    color: #64ffda;
    margin-bottom: 20px;
    font-weight: 600;
    border-bottom: 2px solid #64ffda;
    padding-bottom: 8px;
}

.info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
}

strong {
    color: #88c8ff;
    font-weight: 600;
}

ul {
    list-style-type: none;
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

li {
    background-color: #3d3d3d;
    padding: 8px 16px;
    border-radius: 20px;
    display: inline-block;
    transition: background-color 0.2s;
}

li:hover {
    background-color: #4a4a4a;
}

span {
    color: #ffffff;
}
