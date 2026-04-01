// 1. THE DATA
const curriculumData = {
    "math": {
        "1": {
            expectations: {
                "Code Creation": "Write and execute code to solve problems and represent mathematical situations.",
                "Sequential Logic": "Incorporate sequential events into computational representations.",
                "Code Analysis": "Read and modify existing code that uses sequential events.",
                "Outcome Prediction": "Describe the impact of code alterations on the resulting outcomes."
            },
            strands: {
                "Number": "Numbers up to 50; fractions through equal sharing.",
                "Algebra": "Patterns for predictions; equality; writing code for sequential steps.",
                "Data": "Organizing data into categories; displaying in graphs/tables.",
                "Spatial Sense": "Comparing length, mass, and capacity; calendars; shapes.",
                "Financial Literacy": "Recognizing Canadian coins and bills.",
                "Social-Emotional": "Positive motivation and self-talk strategies."
            }
        },
        "2": {
            expectations: {
                "Code Creation": "Write and execute code to solve problems.",
                "Logic": "Incorporate sequential and concurrent events.",
                "Analysis": "Read and modify code using sequential and concurrent events.",
                "Prediction": "Describe impacts of code alterations."
            },
            strands: { 
                "Number": "Numbers up to 200; addition and subtraction; fractions through equal sharing.", 
                "Algebra": "Extending patterns; equality statements; coding movement on a grid; modelling real-life situations.", 
                "Data": "Managing complicated data; interpreting likelihood to make informed decisions.", 
                "Spatial Sense": "Shape rotation and decomposition; map making; measuring length and time.", 
                "Financial Literacy": "Multiple representations of money values; coin/bill combinations up to $100.", 
                "Social-Emotional": "Critical and creative thinking; using tools like lists and manipulatives to break down problems." 
            }
        },
        "3": {
            expectations: {
                "Code Creation": "Represent mathematical situations through code.",
                "Logic": "Use sequential, concurrent, and repeating events.",
                "Analysis": "Read/modify sequential, concurrent, and repeating events.",
                "Prediction": "Describe outcomes of alterations."
            },
            strands: { 
                "Number": "Numbers to 1,000; place value; representing fractions multiple ways; multiplication/division facts for 2, 5, and 10.", 
                "Algebra": "Repeating patterns; equal equations; coding repeating operations; modelling for real-life solutions.", 
                "Data": "Advanced data collection; using scales on graphs; using averages for comparisons.", 
                "Spatial Sense": "3D object manipulation; measuring weight, capacity, and 2D area; telling time (digital/analog).", 
                "Financial Literacy": "Calculating change for whole-dollar transactions.", 
                "Social-Emotional": "Managing emotions like pride or confusion when facing challenges like coding." 
            }
        },
        "4": {
            expectations: {
                "Code Creation": "Solve problems and represent situations via code.",
                "Logic": "Use sequential, concurrent, repeating, and nested events.",
                "Analysis": "Read/modify sequential, concurrent, repeating, and nested events.",
                "Prediction": "Describe impact on outcomes."
            },
            strands: { 
                "Number": "Numbers up to 10,000; introduction to decimals; dividing 2- and 3-digit whole numbers; multiplication facts up to 10 x 10; solving multi-step problems.", 
                "Algebra": "Classifying repeating and growing patterns; solving algebraic statements (e.g., n + 3 = 10); writing and reading code for geometric designs; modelling real-life situations.", 
                "Data": "Displaying data using frequency tables and multiple-bar graphs; creating infographics to communicate data stories.", 
                "Spatial Sense": "Properties of rectangles and determining their area; understanding metric system units and their relationships.", 
                "Financial Literacy": "Identifying different payment methods for goods and services; determining value for price.", 
                "Social-Emotional": "Developing positive motivation; using and adjusting strategies to reach solutions." 
            }
        },
        "5": {
            expectations: {
                "Code Creation": "Solve problems and represent situations via code.",
                "Logic": "Use conditional statements.",
                "Analysis": "Read/modify conditional statements",
                "Prediction": "Describe impact on outcomes."
            },
            strands: { 
                "Number": "Numbers up to 100,000; percentages; decimal/fraction operations; multiplication facts to 12 x 12; multi-step whole and decimal problems.", 
                "Algebra": "Classifying patterns (repeating, growing, shrinking); solving algebraic equations; coding for growing patterns using multiplication and ratios; modelling real-life optimization.", 
                "Data": "Sampling techniques for 'good' data; identifying misleading graphs; infographics; experiments for probability.", 
                "Spatial Sense": "Characteristics and measurements of various triangles; metric system conversions (length, area, mass, capacity).", 
                "Financial Literacy": "Transfer methods (e-transfers, cheques); calculating total costs/change; unit rates for best value; basic budgets, credit, and debt.", 
                "Social-Emotional": "Developing healthy relationship skills; positive interactions during mathematical discussions." 
            }
        },
        "6": {
            expectations: {
                "Code Creation": "Solve problems and represent situations via efficient code.",
                "Logic": "Use conditional statements and other control structures.",
                "Analysis": "Read and modify code containing conditional statements and control structures.",
                "Prediction": "Describe impact on outcomes and code efficiency."
            },
            strands: { 
                "Number": "Numbers to 1 million; integers; divisibility rules; operational skills with fractions and mixed numbers.", 
                "Algebra": "Identifying patterns at constant rates; algebraic expressions with sub-multiples/decimals; coding for optimization problems (e.g., maximum area).", 
                "Data": "Distinguishing discrete vs. continuous data; broken-line graphs; introduction to probability descriptions.", 
                "Spatial Sense": "Characteristics of 4-sided shapes; area, surface area, and volume; angle properties and protractor use.", 
                "Financial Literacy": "Payment methods; interest rates and fees; trading, lending, and borrowing.", 
                "Social-Emotional": "Connecting learning to real-life situations; tracking personal habits (e.g., screen time) for reflection." 
            }
        },
        "7": {
            expectations: {
                "Code Creation": "Solve problems and represent situations via code.",
                "Logic": "Use defined counts, subprograms, and control structures.",
                "Analysis": "Read and modify code containing defined counts or subprograms.",
                "Prediction": "Describe impact on outcomes and code efficiency."
            },
            strands: { 
                "Number": "Numbers to 1 billion; 'rational numbers'; multiplication facts to 12 x 12; powers and equivalent fractions.", 
                "Algebra": "Solving multi-variable equations; coding to simulate mathematical situations (e.g., rotating or doubling shapes).", 
                "Data": "Circle graphs; critiquing misleading data; probability of independent vs. dependent events.", 
                "Spatial Sense": "Study of the circle (circumference, diameter, radius); surface area and volume of cylinders; dilating/shrinking objects.", 
                "Financial Literacy": "International currencies and exchange rates; interest rates affecting savings; consumer awareness.", 
                "Social-Emotional": "Managing stress and complex challenges by breaking tasks into smaller portions." 
            }
        },
        "8": {
            expectations: {
                "Code Creation": "Solve problems and represent situations via code.",
                "Logic": "Perform data analysis to inform and communicate decisions.",
                "Analysis": "Read and modify code involving data analysis.",
                "Prediction": "Describe impact on outcomes and code efficiency."
            },
            strands: { 
                "Number": "Scientific notation (5.46E6); square roots to 144; proportions; operations with integers and exponents.", 
                "Algebra": "Algebraic notation ($s = d/t$); solving equations involving multiple terms; coding to create lines or curves of best fit.", 
                "Data": "Scatter plots to show relationships between variables; comparing outcomes of complex probability experiments.", 
                "Spatial Sense": "Pythagorean Theorem; angle properties of intersecting/parallel lines; working with very large (terabyte) and small (nanosecond) units.", 
                "Financial Literacy": "Balanced budgets; advantage of sales and reward programs; simple vs. compound interest using technology.", 
                "Social-Emotional": "Building healthy relationships; respectful interactions and mathematical reasoning during discussions." 
            }
        },
        "9": {
            expectations: {
                "Code Creation": "Decompose situations into steps to represent math concepts and solve problems.",
                "Logic": "Apply variables, parameters, equations, and inequalities.",
                "Analysis": "Alter code to adjust constraints and parameters for new situations.",
                "Prediction": "Read code to predict its outcome."
            },
            strands: { 
                "Number": "Connecting various number systems; positive/negative fractions and decimals; ratios, rates, and proportions in real-life contexts.", 
                "Algebra": "Generalizing relationships with algebraic expressions; coding to represent and analyze dynamic situations; linear vs. non-linear relations.", 
                "Data": "Analyzing collection and use of data; mathematical modelling to analyze real-life situations with two variables.", 
                "Geometry and Measurement": "Geometric properties of circles and triangles; relationships between volumes of cones/cylinders and pyramids/prisms.", 
                "Financial Literacy": "Analyzing situations to inform financial decisions (appreciation/depreciation); budgets for purchasing goods and services.", 
                "Social-Emotional": "Exploring mathematical learning skills through classroom instruction and real-world problem solving." 
            }
        },
    },
    "science": {
        "1": {
            expectations: {
                "Code Creation": "Write and execute code to solve problems and represent mathematical situations.",
                "Sequential Logic": "Incorporate sequential events into computational representations.",
                "Code Analysis": "Read and modify existing code that uses sequential events.",
                "Outcome Prediction": "Describe the impact of code alterations on the resulting outcomes."
            },
            strands: {
                "Life Systems": "Explore natural environments; understand the importance of non-living and living things.",
                "Matter and Energy": "Energy use in daily life; the Sun as a principal energy source; responsible energy use.",
                "Structures and Mechanisms": "Characteristics of structures (texture, shape); materials used in common objects.",
                "Earth and Space Systems": "Cycle of day/night and seasons; how seasons affect living things."
            }
        },
        "2": {
            expectations: {
                "Code Creation": "Write and execute code to solve problems.",
                "Logic": "Incorporate sequential and concurrent events.",
                "Analysis": "Read and modify code using sequential and concurrent events.",
                "Prediction": "Describe impacts of code alterations."
            },
            strands: { 
                "Life Systems": "Animal growth, lifecycles, and characteristics; interconnectedness of animals and the environment.",
                "Matter and Energy": "Properties of liquids and solids; interactions between states of matter; impact on society.",
                "Structures and Mechanisms": "Uses of simple machines; designing and testing mechanisms to create controlled movement.",
                "Earth and Space Systems": "Properties of air and water; their importance for survival; resource conservation."
            }
        },
        "3": {
            expectations: {
                "Code Creation": "Represent mathematical situations through code.",
                "Logic": "Use sequential, concurrent, and repeating events.",
                "Analysis": "Read/modify sequential, concurrent, and repeating events.",
                "Prediction": "Describe outcomes of alterations."
            },
            strands: { 
                "Life Systems": "Basic parts and functions of plants; importance of plants to humans and other living things.",
                "Matter and Energy": "Forces causing motion; using forces to create controlled movement; impact of forces on the environment.",
                "Structures and Mechanisms": "Strength and stability of structures; relationship between form and function.",
                "Earth and Space Systems": "Composition of local soils; importance of soil in agriculture and the environment." 
            }
        },
        "4": {
            expectations: {
                "Code Creation": "Solve problems and represent situations via code.",
                "Logic": "Use sequential, concurrent, repeating, and nested events.",
                "Analysis": "Read/modify sequential, concurrent, repeating, and nested events.",
                "Prediction": "Describe impact on outcomes."
            },
            strands: { 
                "Life Systems": "Habitats and communities; organisms interacting within environments; food chains.",
                "Matter and Energy": "Properties of light and sound; technological innovations in light/sound; impact on society.",
                "Structures and Mechanisms": "Principles and functions of machines; mechanisms transmitting and transforming motion.",
                "Earth and Space Systems": "Earth processes and formation of rocks/minerals; human use of geological resources." 
            }
        },
        "5": {
            expectations: {
                "Code Creation": "Solve problems and represent situations via code.",
                "Logic": "Use conditional statements.",
                "Analysis": "Read/modify conditional statements",
                "Prediction": "Describe impact on outcomes."
            },
            strands: { 
                "Life Systems": "Human body systems (e.g., respiratory, circulatory); connections between systems and health.",
                "Matter and Energy": "Properties of matter and changes of state; physical/chemical properties of solids, liquids, and gases.",
                "Structures and Mechanisms": "Forces acting on structures; internal and external factors affecting structural strength.",
                "Earth and Space Systems": "Conservation of energy and resources; impacts of energy use on society and the environment."
            }
        },
        "6": {
            expectations: {
                "Code Creation": "Solve problems and represent situations via efficient code.",
                "Logic": "Use conditional statements and other control structures.",
                "Analysis": "Read and modify code containing conditional statements and control structures.",
                "Prediction": "Describe impact on outcomes and code efficiency."
            },
            strands: { 
                "Life Systems": "Biodiversity and classification of organisms; impact of climate change on biodiversity.",
                "Matter and Energy": "Principles of electrical energy; designing and testing electrical circuits; generation and use of electricity.",
                "Structures and Mechanisms": "Properties of air and flight; four forces of flight; environmental impact of flying machines.",
                "Earth and Space Systems": "Solar system and space exploration; components of the universe; technological innovations in space." 
            }
        },
        "7": {
            expectations: {
                "Code Creation": "Solve problems and represent situations via code.",
                "Logic": "Use defined counts, subprograms, and control structures.",
                "Analysis": "Read and modify code containing defined counts or subprograms.",
                "Prediction": "Describe impact on outcomes and code efficiency."
            },
            strands: { 
                "Life Systems": "Ecosystem interactions; flow of energy and matter; impacts of human activities on environment.",
                "Matter and Energy": "Particle theory of matter; pure substances and mixtures; physical processes for separating mixtures.",
                "Structures and Mechanisms": "Relationship between structural forms and forces; stability and center of gravity; structural failure.",
                "Earth and Space Systems": "Heat in the environment; heat transfer (conduction, convection, radiation); particle theory."
            }
        },
        "8": {
            expectations: {
                "Code Creation": "Solve problems and represent situations via code.",
                "Logic": "Perform data analysis to inform and communicate decisions.",
                "Analysis": "Read and modify code involving data analysis.",
                "Prediction": "Describe impact on outcomes and code efficiency."
            },
            strands: { 
                "Life Systems": "Cell theory; structure and function of plant and animal cells; emerging technologies in cell biology.",
                "Matter and Energy": "Fluid mechanics; properties of fluids (viscosity, buoyancy); fluid systems and pressure.",
                "Structures and Mechanisms": "Mechanical systems; mechanical advantage and efficiency; describing and analyzing various systems.",
                "Earth and Space Systems": "Global water systems; sustainability and human impact on water; climate change affecting ice caps." 
            }
        },
        "9": {
            expectations: {
                "Code Creation": "Decompose situations into steps to represent math concepts and solve problems.",
                "Logic": "Apply variables, parameters, equations, and inequalities.",
                "Analysis": "Alter code to adjust constraints and parameters for new situations.",
                "Prediction": "Read code to predict its outcome."
            },
            strands: { 
                "Biology": "Assess the impact of human activities on the sustainability of terrestrial or aquatic ecosystems; evaluate the effectiveness of various courses of action.", 
                "Chemistry": "Investigate the physical and chemical properties of elements and compounds; assess the environmental and social impacts of using common elements and compounds.", 
                "Physics": "Evaluate the social, economic, and environmental implications of electricity production and consumption.", 
                "Earth and Space Science": "Investigate components of the universe and the effects of space exploration on society, the environment, and the economy."
            }
        },
    }
};

// 2. THE MAIN "GENERATE" LOGIC
document.getElementById('generate-btn').addEventListener('click', function() {
    const grade = document.getElementById('grade-select').value;
    const subject = document.getElementById('subject-select').value;
    
    // FETCH the data based on selection
    const data = curriculumData[subject][grade];

    if (!data) {
        alert("Details for this selection are still being added. Try Math Grade 1-4 or 9!");
        return;
    }

    // Collect Checkboxes for logging
    const selectedTeams = Array.from(document.querySelectorAll('input[name="teamwork-style"]:checked')).map(cb => cb.value);
    const selectedStyles = Array.from(document.querySelectorAll('input[name="learning-style"]:checked')).map(cb => cb.value);

    console.log("--- Research Data Logged ---", { grade, subject, selectedTeams, selectedStyles });

    // UI TRANSITION
    document.getElementById('survey-step').style.display = 'none';
    document.getElementById('confirmation-step').style.display = 'block';

    // BUILD TABLE 1
    let expList = Object.entries(data.expectations)
            .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`)
            .join('');

    let t1HTML = `
        <h3>Table 1: Coding Expectations (Grade ${grade})</h3>
        <table>
            <tr><th>Focus Area & Expectation</th></tr>
            <tr><td><ul style="text-align: left; margin: 0; list-style: none; padding: 0;">${expList}</ul></td></tr>
        </table>`;

    // BUILD TABLE 2
    let strandHeaders = Object.keys(data.strands).map(s => `<th>${s}</th>`).join('');
    let strandValues = Object.values(data.strands).map(v => `<td>${v}</td>`).join('');
    
    let t2HTML = `
        <h3>Table 2: ${subject.toUpperCase()} Curriculum Overview</h3>
        <div style="overflow-x:auto;">
            <table>
                <tr>${strandHeaders}</tr>
                <tr>${strandValues}</tr>
            </table>
        </div>`;

    document.getElementById('table-container').innerHTML = t1HTML + t2HTML;
});

// 3. NAVIGATION BUTTONS
document.getElementById('back-btn').addEventListener('click', function() {
    document.getElementById('confirmation-step').style.display = 'none';
    document.getElementById('survey-step').style.display = 'block';
});

document.getElementById('confirm-btn').addEventListener('click', function() {
    const grade = document.getElementById('grade-select').value;
    const subject = document.getElementById('subject-select').value;
    
    document.getElementById('confirmation-step').style.display = 'none';
    const resultsArea = document.getElementById('feature-space');
    resultsArea.innerHTML = ""; 

    if (grade === "1" && subject === "math") {
        resultsArea.innerHTML = `
            <div class="result-card" style="max-width: 1200px; margin: 0 auto;">
                <div class="curriculum-tag">Research-Validated Recommendations</div>
                <h2 style="font-size: 2rem; margin-bottom: 10px;">Grade 1 Mathematics: Coding & Modelling</h2>
                <p style="font-size: 1.1rem; color: #555;">Cross-reference these <strong>Match Tags</strong> with your survey selections to ensure pedagogical alignment.</p>

                <div class="projects-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(450px, 1fr)); gap: 30px; margin-top: 30px;">
                    
                    <div class="project-item" style="border: 1px solid #ddd; padding: 25px; border-radius: 12px; background: white; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                        <img src="ScratchGrade1.JPG" alt="ScratchJr" style="width:100%; border-radius:8px; height: 200px; object-fit: cover;">
                        <h4 style="font-size: 1.4rem; margin: 15px 0;">ScratchJr: Storytelling</h4>
                        
                        <div class="match-tags" style="background: #fdfdfd; border: 1px solid #eee; padding: 15px; border-radius: 8px; margin-bottom: 15px; font-size: 0.9rem;">
                            <strong>Quick Match Tags:</strong>
                            <ul style="list-style: none; padding: 0; margin: 10px 0 0 0; display: grid; grid-template-columns: 1fr 1fr; gap: 5px;">
                                <li>🎯 <b>Grades:</b> 1–3</li>
                                <li>🤝 <b>Support:</b> Guided/High</li>
                                <li>🏠 <b>Location:</b> Class/Home</li>
                                <li>🧩 <b>Style:</b> Project-based</li>
                                <li>⌨️ <b>Type:</b> Block-based</li>
                                <li>👥 <b>Vibe:</b> Solo/Class</li>
                            </ul>
                        </div>

                        <p style="font-size: 0.95rem; line-height: 1.5;">Aligns with <b>Sequential Events</b>. Best for teachers ready to provide hands-on guidance during the initial setup.</p>
                        <a href="https://codejr.org/scratchjr/index.html" target="_blank" class="primary-btn" style="display: inline-block; margin-top: 10px;">View Project</a>
                    </div>

                    <div class="project-item" style="border: 1px solid #ddd; padding: 25px; border-radius: 12px; background: white; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                        <img src="BlocklyGrade1.jpg" alt="Blockly Maze" style="width:100%; border-radius:8px; height: 200px; object-fit: cover;">
                        <h4 style="font-size: 1.4rem; margin: 15px 0;">Blockly Games: Maze</h4>
                        
                        <div class="match-tags" style="background: #fdfdfd; border: 1px solid #eee; padding: 15px; border-radius: 8px; margin-bottom: 15px; font-size: 0.9rem;">
                            <strong>Quick Match Tags:</strong>
                            <ul style="list-style: none; padding: 0; margin: 10px 0 0 0; display: grid; grid-template-columns: 1fr 1fr; gap: 5px;">
                                <li>🎯 <b>Grades:</b> 1–4</li>
                                <li>⚡ <b>Support:</b> Independent</li>
                                <li>🏠 <b>Location:</b> In-Class</li>
                                <li>🎮 <b>Style:</b> Gamified</li>
                                <li>⌨️ <b>Type:</b> Block-based</li>
                                <li>👥 <b>Vibe:</b> Solo/class</li>
                            </ul>
                        </div>

                        <p style="font-size: 0.95rem; line-height: 1.5;">Aligns with <b>Sequential Events</b>. Ideal for students who prefer a <b>gamified</b> approach with less teacher intervention.</p>
                        <a href="https://blockly.games/maze?lang=en" target="_blank" class="primary-btn" style="display: inline-block; margin-top: 10px;">View Project</a>
                    </div>

                    <div class="project-item" style="border: 1px solid #ddd; padding: 25px; border-radius: 12px; background: white; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                        <img src="CountingGrade1.jpg" alt="Scratch Counting Money" style="width:100%; border-radius:8px; height: 200px; object-fit: cover;">
                        <h4 style="font-size: 1.4rem; margin: 15px 0;">Scratch: Counting Money</h4>
                        
                        <div class="match-tags" style="background: #fdfdfd; border: 1px solid #eee; padding: 15px; border-radius: 8px; margin-bottom: 15px; font-size: 0.9rem;">
                            <strong>Quick Match Tags:</strong>
                            <ul style="list-style: none; padding: 0; margin: 10px 0 0 0; display: grid; grid-template-columns: 1fr 1fr; gap: 5px;">
                                <li>🎯 <b>Grades:</b> 1–3</li>
                                <li>⚡ <b>Support:</b> Guided/High </li>
                                <li>🏠 <b>Location:</b> In-Class</li>
                                <li>🎮 <b>Style:</b> Visual</li>
                                <li>⌨️ <b>Type:</b> Block-based</li>
                                <li>👥 <b>Vibe:</b> Whole-class</li>
                            </ul>
                        </div>

                        <p style="font-size: 0.95rem; line-height: 1.5;">Aligns with <b>Financial Literacy</b>. Ideal for whole class on recognition of Canadian dollars with teachers' guidance.</p>
                        <a href="https://scratch.mit.edu/projects/1290470997/" target="_blank" class="primary-btn" style="display: inline-block; margin-top: 10px;">View Project</a>
                    </div>

                    <div class="project-item" style="border: 1px solid #ddd; padding: 25px; border-radius: 12px; background: white; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                        <img src="TurtleGrade1.jpg" alt="Turtle Academy" style="width:100%; border-radius:8px; height: 200px; object-fit: cover;">
                        <h4 style="font-size: 1.4rem; margin: 15px 0;">Turtle Academy: Lesson 1</h4>
                        
                        <div class="match-tags" style="background: #fdfdfd; border: 1px solid #eee; padding: 15px; border-radius: 8px; margin-bottom: 15px; font-size: 0.9rem;">
                            <strong>Quick Match Tags:</strong>
                            <ul style="list-style: none; padding: 0; margin: 10px 0 0 0; display: grid; grid-template-columns: 1fr 1fr; gap: 5px;">
                                <li>🎯 <b>Grades:</b> 1–4</li>
                                <li>⚡ <b>Support:</b> Independent </li>
                                <li>🏠 <b>Location:</b> Mix of in-class and at home</li>
                                <li>🎮 <b>Style:</b> Gamified</li>
                                <li>⌨️ <b>Type:</b> Block-based</li>
                                <li>👥 <b>Vibe:</b> Solo Mission</li>
                            </ul>
                        </div>

                        <p style="font-size: 0.95rem; line-height: 1.5;">Aligns with <b>Sequential Events</b>. Ideal for independent coders more ahead in Grades 1-3 who likes typing with good understanding of guideliness.</p>
                        <a href="https://turtleacademy.com/lessons/1" target="_blank" class="primary-btn" style="display: inline-block; margin-top: 10px;">View Project</a>
                    </div>

                    </div>

                <div class="button-group" style="margin-top: 40px; text-align: center;">
                    <button id="final-back-btn" class="secondary-btn">Go Back to Start</button>
                </div>
            </div>
        `;

        document.getElementById('final-back-btn').addEventListener('click', function() {
            resultsArea.innerHTML = "";
            document.getElementById('survey-step').style.display = 'block';
        });
    }
        // Re-attach the Back Button listener
        document.getElementById('final-back-btn').addEventListener('click', function() {
            resultsArea.innerHTML = "";
            document.getElementById('survey-step').style.display = 'block';
        });

    

        // We need to attach the click event to the NEWly created button
        document.getElementById('final-back-btn').addEventListener('click', function() {
            resultsArea.innerHTML = ""; // Clear results
            document.getElementById('survey-step').style.display = 'block'; // Show survey
        });

        document.getElementById('fallback-back-btn').addEventListener('click', function() {
            resultsArea.innerHTML = "";
            document.getElementById('survey-step').style.display = 'block';
        });
    
});
