<h1>Intelligent ASD Screening Web Application</h1>
<p>
    This repository contains the frontend application for an AI-powered
    screening tool designed for the early-stage detection of Autism Spectrum
    Disorder (ASD). It provides a modern, user-friendly, and responsive
    interface for users to answer standard screening questionnaires and receive
    a real-time risk assessment.
</p>
<p>
    This application is the client-side component of a larger system and is
    designed to communicate with a dedicated
    <a
        href="https://www.google.com/search?q=link-to-your-backend-repo-here"
        title="null"
        >Python backend API</a
    >
    that houses the machine learning models.
</p>
<h2>✨ Core Features</h2>
<ul>
    <li>
        <p>
            <strong>Specialized Screening:</strong> The user interface
            dynamically adjusts to provide the correct questionnaire based on
            the subject's age category (Toddler vs. Child/Adult).
        </p>
    </li>
    <li>
        <p>
            <strong>Multi-Model Analysis:</strong> Displays results from three
            distinct machine learning models simultaneously, offering a more
            nuanced and comprehensive "second opinion" rather than a single
            predictive score.
        </p>
    </li>
    <li>
        <p>
            <strong>Explainable AI:</strong> For each prediction, the
            application displays the top 5 behavioral or demographic features
            that most influenced the model's decision, providing transparency.
        </p>
    </li>
    <li>
        <p>
            <strong>Modern User Experience:</strong> Built with a clean,
            professional, and fully responsive UI that includes both light and
            dark themes.
        </p>
    </li>
    <li>
        <p>
            <strong>Intuitive &amp; User-Friendly:</strong> Designed for
            non-technical users, such as parents and caregivers, with clear
            instructions and user-friendly form inputs.
        </p>
    </li>
</ul>
<h2>💻 Technology Stack</h2>
<p>
    This project is built with a modern, robust, and scalable technology stack.
</p>
<h3>Frontend</h3>
<ul>
    <li>
        <p>
            <strong>Framework:</strong>
            <a href="https://react.dev/" title="null"
                ><span class="highlight-diff-selection">React</span></a
            ><span class="highlight-diff-selection"> (bootstrapped with </span
            ><a href="https://vitejs.dev/" title="null"
                ><span class="highlight-diff-selection">Vite</span></a
            ><span class="highlight-diff-selection">)</span>
        </p>
    </li>
    <li>
        <p>
            <strong>Language:</strong>
            <a href="https://www.typescriptlang.org/" title="null"
                >TypeScript</a
            >
        </p>
    </li>
    <li>
        <p>
            <strong>Styling:</strong>
            <a href="https://tailwindcss.com/" title="null">Tailwind CSS</a>
        </p>
    </li>
    <li>
        <p>
            <strong>UI Components:</strong>
            <a href="https://ui.shadcn.com/" title="null">shadcn/ui</a>
        </p>
    </li>
    <li>
        <p>
            <strong>State Management:</strong> React Hooks
            (<code>useState</code>, <code>useEffect</code>)
        </p>
    </li>
</ul>
<h3>Backend (Separate Repository)</h3>
<ul>
    <li>
        <p>
            <strong>Language:</strong>
            <a href="https://www.python.org/" title="null">Python</a>
        </p>
    </li>
    <li>
        <p>
            <strong>Framework:</strong>
            <a href="https://fastapi.tiangolo.com/" title="null">FastAPI</a>
        </p>
    </li>
    <li>
        <p>
            <strong>Machine Learning:</strong>
            <a href="https://scikit-learn.org/" title="null">Scikit-learn</a>,
            <a href="https://xgboost.ai/" title="null">XGBoost</a>,
            <a href="https://imbalanced-learn.org/stable/" title="null"
                >Imbalanced-learn</a
            >
        </p>
    </li>
</ul>
<h2>🚀 Getting Started: Running Locally</h2>
<p>
    To run this project locally, you must first have the backend API server
    running.
</p>
<h3><strong>Part 1: Setting Up the Backend</strong></h3>
<ol>
    <li>
        <p><strong>Clone the Backend Repository:</strong></p>
        <pre><code>git clone &lt;https://github.com/Hardik242/Autism-screening-backend.git&gt;
cd &lt;Autism-screening-backend&gt;
<br class="ProseMirror-trailingBreak"></code></pre>
    </li>
    <li>
        <p><strong>Install Python Dependencies:</strong></p>
        <pre><code>pip install -r requirements.txt
<br class="ProseMirror-trailingBreak"></code></pre>
    </li>
    <li>
        <p>
            <strong>CRITICAL - Train the Models:</strong> The API requires the
            trained model files. Run the two training scripts to generate them.
            They are saved in .ipynb file so just run the cell to get trained
            models
        </p>
        <p>
            This will create a <code>models</code> directory with all the
            necessary <code>.joblib</code> files.
        </p>
    </li>
    <li>
        <p><strong>Run the Backend Server:</strong></p>
        <pre><code>uvicorn main:app --reload
<br class="ProseMirror-trailingBreak"></code></pre>
        <p>
            The API should now be running at <code>http://127.0.0.1:8000</code>.
        </p>
    </li>
</ol>
<h3><strong>Part 2: Setting Up the Frontend</strong></h3>
<ol>
    <li>
        <p><strong>Clone this Frontend Repository:</strong></p>
        <pre><code>git clone &lt;https://github.com/Hardik242/Autism-screening-frontend.git&gt;
cd Autism-screening-frontend
<br class="ProseMirror-trailingBreak"></code></pre>
    </li>
    <li>
        <p><strong>Install Node.js Dependencies:</strong></p>
        <pre><code>npm install
<br class="ProseMirror-trailingBreak"></code></pre>
    </li>
    <li>
        <p>
            <strong>CRITICAL - Configure Environment Variable:</strong> The
            frontend needs to know where to find the backend API.
        </p>
        <ul>
            <li>
                <p>
                    Create a new file in the root of the project named
                    <code>.env.local</code>.
                </p>
            </li>
            <li>
                <p>
                    Add the following line to this<span
                        class="highlight-diff-selection">
                        file (note the </span
                    ><code
                        ><span class="highlight-diff-selection"
                            >VITE_</span
                        ></code
                    ><span class="highlight-diff-selection">
                        prefix for Vite projects):</span
                    >
                </p>
                Use any one
                <pre><code>
                  <span class="highlight-diff-selection">VITE_API_URL= "http://127.0.0.1:8000" // For local development</span>
                  <span class="highlight-diff-selection">VITE_API_URL= &lt;Your hosted URL&gt; // For production</span>
                  <br class="ProseMirror-trailingBreak">
</code></pre>
            </li>
        </ul>
    </li>
    <li>
        <p><strong>Run the Development Server:</strong></p>
        <pre><code>npm run dev
<br class="ProseMirror-trailingBreak"></code></pre>
        <p>
            Open
            <a href="http://localhost:8080" title="null"
                >http://localhost:8080</a
            >
            with your browser to see the application.
        </p>
    </li>
</ol>
<h2>🤝 API Integration</h2>
<p>
    The frontend communicates with a single endpoint on the backend to get
    predictions.
</p>
<ul>
    <li>
        <p><strong>Endpoint:</strong> <code>POST /predict/</code></p>
    </li>
    <li>
        <p>
            <strong>Payload:</strong> The frontend sends a JSON object
            containing the user's form data, including a critical
            <code>isToddler</code> flag that tells the backend which set of
            models to use.
        </p>
    </li>
</ul>
<p><strong>Example Payload:</strong></p>
<pre><code>{
  "isToddler": true,
  "Age": 24,
  "Gender": "m",
  "Jaundice": "Yes",
  "Family_History_ASD": "No",
  "A1_Score": "Sometimes",
  "A2_Score": "Rarely",
  "A3_Score": "Never",
  "A4_Score": "Sometimes",
  "A5_Score": "Usually",
  "A6_Score": "Sometimes",
  "A7_Score": "Always",
  "A8_Score": "Always",
  "A9_Score": "Usually",
  "A10_Score": "Always"
}
<br class="ProseMirror-trailingBreak"></code></pre>
