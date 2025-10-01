#!/bin/bash

# Setup script for The Daily Digestible Deming
# Run this from the root of your repo

echo "Creating folder structure..."

# Create main directories
mkdir -p content/reading-plans/unplugging-from-the-matrix
mkdir -p src
mkdir -p public

echo "Folder structure created!"
echo ""
echo "Creating metadata.json..."

# Create metadata file
cat > content/reading-plans/unplugging-from-the-matrix/metadata.json << 'EOF'
{
  "id": "unplugging-from-the-matrix",
  "title": "Unplugging from the Management Matrix",
  "description": "A 7-day journey discovering why the management world you see every day might be an illusion—and learning to see your organization through new eyes using W. Edwards Deming's System of Profound Knowledge.",
  "days": 7,
  "difficulty": "beginner",
  "tags": ["systems-thinking", "profound-knowledge", "fundamentals", "matrix-metaphor"]
}
EOF

echo "metadata.json created!"
echo ""
echo "Creating daily markdown files..."

# Day 1
cat > content/reading-plans/unplugging-from-the-matrix/day-1.md << 'EOF'
# Day 1: The Matrix of Management

## Welcome to the Real World

In *The Matrix*, Morpheus tells Neo: "The Matrix is everywhere. It is all around us... It is the world that has been pulled over your eyes to blind you from the truth."

For managers and leaders, there's a similar matrix—a set of deeply embedded practices and beliefs that seem obviously correct but actually obscure reality and undermine the very results we seek.

W. Edwards Deming spent decades helping organizations see through this illusion. He observed that most managers operate within a system of thinking that creates the problems they're trying to solve. Like Neo before taking the red pill, they can't see it because they're inside it.

**The faulty practices Deming identified aren't just ineffective—they're counterproductive.** They create the opposite of what we intend:
- We rank employees to motivate performance, but destroy cooperation and learning
- We set numerical targets to drive results, but incentivize gaming the system
- We manage by visible figures alone, ignoring the unseen factors that truly drive performance

Over the next seven days, you'll learn to recognize these artificial constructs and discover a radically different way of understanding your organization—one based on systems, variation, knowledge, and human psychology.

## Reflection Questions
1. What management practices in your organization feel like "the way things are done" but don't seem to produce the results you want?
2. Are you ready to question fundamental assumptions about how organizations work?

## Today's Challenge
Notice one common management practice today. Ask yourself: "What is this practice actually optimizing for? Does it achieve that goal?"
EOF

# Day 2
cat > content/reading-plans/unplugging-from-the-matrix/day-2.md << 'EOF'
# Day 2: The Illusion—Faulty Practices & Deadly Diseases

## Seeing the Code

In *The Matrix*, once Neo begins training, he learns to see the green code behind the illusion. Similarly, once you know what to look for, you'll start seeing Deming's faulty practices and deadly diseases everywhere.

**Deming's Nine Faulty Practices** (from *The New Economics*):
1. **Lack of constancy of purpose** - Shifting priorities, quarterly thinking, management by crisis
2. **Emphasis on short-term profits** - Sacrificing long-term health for immediate numbers
3. **Personal review systems, merit rating, annual review** - Ranking people, forced distributions
4. **Mobility of management** - Job-hopping leaders who never see the consequences of their decisions
5. **Management by use of visible figures only** - Ignoring the unknown and unknowable factors
6. **Excessive medical costs** - Healthcare expenses that cripple competitiveness
7. **Excessive costs of liability** - Legal costs from adversarial relationships
8. **Focus on the denominator** - Cutting costs rather than improving value
9. **Overemphasis on testing and inspection** - Finding defects instead of preventing them

**The Seven Deadly Diseases** include:
- Lack of constancy of purpose
- Emphasis on short-term profits
- Performance appraisals and merit ratings
- Mobility of top management
- Running a company on visible figures alone
- Excessive medical costs
- Excessive warranty costs

**Why are these problematic?** Because they all share a common flaw: **they treat the organization as a collection of independent parts rather than an interdependent system.** They assume:
- People work independently (they don't—they work in systems)
- Individual performance can be isolated (it can't—performance is largely determined by the system)
- Past results predict future performance (they don't—systems change)
- More pressure produces better results (it doesn't—it produces fear and sub-optimization)

These practices persist because they provide the *illusion* of control. They're simple, visible, and satisfy our desire to "do something." But like the Matrix, they blind us to how things actually work.

## Reflection Questions
1. Which of these faulty practices exist in your organization? How many can you count?
2. What would happen if you stopped doing one of them? What fear prevents you from stopping?

## Today's Challenge
Identify one "deadly disease" or "faulty practice" in your workplace. Write down: (1) Why you think it exists, (2) What problem it's meant to solve, (3) What problems it actually creates.
EOF

# Day 3
cat > content/reading-plans/unplugging-from-the-matrix/day-3.md << 'EOF'
# Day 3: Taking the Red Pill—Introduction to Profound Knowledge

## "I'm Trying to Free Your Mind"

Morpheus offers Neo a choice: the blue pill (stay comfortable in illusion) or the red pill (see reality, no matter how difficult).

Deming offers the same choice. His "red pill" is the **System of Profound Knowledge**—four interconnected lenses that allow you to see your organization as it actually is, not as conventional management theory suggests.

**The Four Lenses of Profound Knowledge:**

1. **Appreciation for a System**
   - Organizations are systems, not collections of parts
   - Optimizing individual parts sub-optimizes the whole
   - Results come from interactions, not individual actions

2. **Knowledge of Variation**
   - All processes vary; not all variation has a special cause
   - Reacting to common cause variation makes things worse
   - Understanding variation prevents tampering and false conclusions

3. **Theory of Knowledge**
   - Knowledge comes from theory, tested by experience
   - Without theory, there's no learning—just copying
   - Prediction, not explanation, tests understanding

4. **Psychology**
   - People are intrinsically motivated
   - External motivation (carrots and sticks) destroys intrinsic motivation
   - Fear destroys learning and cooperation

**Here's the key insight:** These four bodies of knowledge are not separate disciplines. They interrelate. You cannot truly understand one without understanding the others.

- Systems thinking without knowledge of variation leads to false conclusions about cause and effect
- Understanding variation without psychology leads to blaming people for system problems
- Psychology without systems thinking leads to individual solutions for system problems
- Theory of knowledge ties it all together—helping us learn and improve

**You don't need to master these domains immediately.** But you need to know they exist and begin developing your understanding. It's a journey, not a destination.

## Reflection Questions
1. Which of the four lenses feels most foreign to your current way of thinking?
2. Can you recall a recent problem where lack of one of these lenses led to a poor decision?

## Today's Challenge
Pick one lens that intrigues you most. We'll explore each one in depth over the next four days. For today, just notice: Where might this lens help you see differently?
EOF

# Day 4
cat > content/reading-plans/unplugging-from-the-matrix/day-4.md << 'EOF'
# Day 4: Lens One—Appreciation for a System

## "There Is No Spoon"

In the Matrix, a child bends a spoon with his mind and tells Neo: "There is no spoon... it is not the spoon that bends, it is only yourself."

In management, there's a similar insight: **There is no "individual performance"—there is only system performance.**

**What is a system?**
A system is a network of interdependent components that work together to accomplish the aim of the system. Key word: **interdependent**. You cannot understand the components in isolation.

**Examples:**
- An orchestra (musicians + conductor + music + instruments + acoustics → performance)
- An automobile (engine + transmission + wheels + steering → transportation)
- A hospital (doctors + nurses + facilities + processes + equipment → patient care)

**Why does this matter for management?**

Most management practices assume people work independently:
- Individual performance reviews
- Individual incentives
- Individual accountability
- "Personal responsibility" for outcomes

But in reality, **most variation in performance comes from the system, not from individuals.**

Deming estimated that 94% of performance issues are system issues, while only 6% are related to individual workers. Yet we spend 94% of our energy trying to fix the 6%.

**What happens when you treat a system as independent parts:**
- Sales blames production for late deliveries
- Production blames purchasing for poor materials
- Purchasing blames finance for budget constraints
- Everyone optimizes their part, the whole suffers
- Competition replaces cooperation
- The customer loses

**Systems thinking changes everything:**
- Instead of "Who did this wrong?" ask "What about our system produced this result?"
- Instead of "How can I maximize my department?" ask "How does my work affect the whole?"
- Instead of individual targets, focus on system capability
- Instead of fixing people, improve the system they work in

**The manager's job shifts:** From judging and motivating individuals to improving the system they work within.

## Reflection Questions
1. Describe your work area as a system. What are the interdependent components? What's the aim?
2. Think of a recent "people problem." Could it have been a system problem instead?

## Today's Challenge
Draw a simple diagram of your work system. Include: inputs, processes, outputs, customers, suppliers, and feedback loops. Where do things get stuck or disconnected?
EOF

# Day 5
cat > content/reading-plans/unplugging-from-the-matrix/day-5.md << 'EOF'
# Day 5: Lens Two—Knowledge of Variation

## "Fate, It Seems, Is Not Without a Sense of Irony"

In the Matrix, The Oracle tells Neo about fate and choice. She's describing something Neo will understand later: the difference between the predetermined and the genuinely new—between pattern and signal.

This is exactly what **knowledge of variation** helps us understand: the difference between noise and signal, between common cause and special cause, between the system behaving normally and something genuinely different happening.

**Everything varies. Every process, every outcome, every measurement.**

The question isn't "Did variation occur?" (it always does). The question is: **"What kind of variation is this?"**

**Two Types of Variation:**

**1. Common Cause Variation (The System)**
- Inherent in the process
- Predictable in aggregate, random in detail
- Always present
- Cannot be attributed to specific causes
- Examples: Slight differences in commute time, small variations in product dimensions, normal fluctuations in sales

**2. Special Cause Variation (A Signal)**
- From outside the system
- Specific, identifiable causes
- Not always present
- Can and should be investigated
- Examples: Machine breakdown, supplier change, new competitor, weather event

**Why this matters:**

The most common management mistake is **tampering**—treating common cause variation as if it were special cause. This makes performance worse, not better.

**Examples of tampering:**
- An employee has a slow week, so their manager "coaches" them (it was random variation, now they're demoralized)
- Monthly sales dip, so leadership demands an explanation (no special cause—just variation)
- One customer complaint triggers a process change (was it signal or noise?)
- Bonuses for above-average performance (rewarding luck, punishing the unlucky)

**The opposite mistake—also common:**
Ignoring special causes because "everything varies" and missing genuine signals that need response.

**How to tell the difference:**

You need a **control chart**—a basic statistical tool showing:
- The process average (centerline)
- Normal variation boundaries (control limits)
- Whether points fall outside these limits or show patterns

**The profound insight:** Once you understand variation, you realize that most of what managers "react to" is just the system talking to itself. **Most management action is tampering.**

The wise manager:
- Lets common cause variation alone (stable but imperfect is normal)
- Investigates special causes (something changed)
- Works to reduce common cause variation by improving the system (not reacting to individual points)

## Reflection Questions
1. Think of the last time you or your leadership "reacted" to a number. Was it signal or noise?
2. What percentage of your management energy goes to reacting versus improving the system?

## Today's Challenge
Track something over time (response time, error rate, sales, anything). Plot it. Do you see a stable pattern with random variation, or do you see genuine signals of change?
EOF

# Day 6
cat > content/reading-plans/unplugging-from-the-matrix/day-6.md << 'EOF'
# Day 6: Lens Three—Theory of Knowledge

## "I Can Only Show You the Door. You're the One Who Has to Walk Through It."

Morpheus can't *give* Neo knowledge. Neo must develop it through experience guided by theory. This is exactly what Deming means by **Theory of Knowledge**—understanding how we learn and improve.

**Most organizations don't learn. They copy.**

They see a successful company and imitate their practices without understanding the underlying principles. They implement "best practices" without knowing why they work (or whether they'll work in a different context). They react to data without having a theory to explain it.

**Deming's insight:** Without theory, there is no learning. There is only copying, imitation, and random trial and error.

**What is a theory?**

A theory is a framework that:
- Explains why something happens
- Predicts what will happen under different conditions
- Can be tested against experience
- Evolves when predictions don't match reality

**The cycle of knowledge:**
1. Start with a theory (prediction about what will happen and why)
2. Test it (Plan-Do-Study-Act)
3. Compare prediction to reality
4. Revise theory
5. Repeat

This is the foundation of the **PDSA Cycle** (Plan-Do-Study-Act):
- **Plan:** What do we predict will happen, and why? What will we test?
- **Do:** Carry out the test on a small scale
- **Study:** What did we learn? How does reality compare to prediction?
- **Act:** What changes should we make to our theory? What next?

**Why "Study" not "Check"?**

Many people use "PDCA" (Check). But "Check" implies you're just verifying the plan worked. "Study" recognizes you're learning—sometimes the plan works, sometimes it doesn't, but either way you gain knowledge.

**Without theory:**
- "Our sales are down" (okay, but why? what's your theory?)
- "This best practice worked at Company X" (okay, but why? will it work here?)
- "Let's try this and see what happens" (okay, but what do you predict? how will you know if you learned anything?)

**With theory:**
- "I predict sales are down because of X, which should also show up as Y. Let's test."
- "This practice worked at Company X because of these conditions. We have/don't have those conditions, so I predict..."
- "Based on our understanding of the system, if we change X, I predict Y will happen because Z. Let's test on a small scale."

**The profound shift:** Management becomes less about having "the answer" and more about having better theories, testing them, and continuously learning.

## Reflection Questions
1. When was the last time you made a change based on a theory you could articulate? What did you predict would happen?
2. When you copy a "best practice," do you understand *why* it works? In what contexts? What theory explains it?

## Today's Challenge
Choose a problem you're facing. Write down: (1) Your theory about why it's happening, (2) A prediction about what would happen if you changed something, (3) A small test you could run to learn.
EOF

# Day 7
cat > content/reading-plans/unplugging-from-the-matrix/day-7.md << 'EOF'
# Day 7: Lens Four—Psychology (And Bringing It All Together)

## "Free Your Mind"

At the climax of The Matrix, Neo must stop trying to bend reality with force and instead understand it differently. The moment he sees the Matrix as it truly is, everything changes. He's free.

This is what understanding **psychology** does for management—it frees you from force-based, extrinsic motivation systems and reveals how to work with human nature instead of against it.

**Deming's Key Psychological Insights:**

**1. People are born intrinsically motivated**
- We naturally want to learn, contribute, take pride in our work
- We don't need to be "motivated"—we need to not be demotivated

**2. Extrinsic motivation destroys intrinsic motivation**
- External rewards (bonuses, rankings, gold stars) make work transactional
- We stop asking "What serves the customer?" and start asking "What gets me the reward?"
- The reward becomes the goal; the work becomes merely instrumental

**3. Fear destroys learning and cooperation**
- Fear of blame → hiding problems
- Fear of ranking → competition instead of cooperation
- Fear of speaking up → loss of knowledge and innovation
- Fear of failure → risk aversion and stagnation

**4. Individual differences exist and must be respected**
- People learn differently, work differently, contribute differently
- Forced rankings assume people are interchangeable—they're not
- The job of leadership is to help each person contribute, not to standardize everyone

**5. People want to be part of something meaningful**
- Understanding the system's aim gives purpose
- Seeing how your work contributes to the whole creates meaning
- Cooperation toward a shared aim is deeply satisfying

**How psychology connects to the other lenses:**

- **Systems + Psychology:** People don't work in isolation; they work in systems. Most performance issues are system issues. Blaming individuals for system problems destroys morale and solves nothing.

- **Variation + Psychology:** When you rank people or react to individual performance variations, you're usually responding to the system, not the person. This creates fear and destroys motivation.

- **Theory of Knowledge + Psychology:** Learning requires safety to experiment and fail. Fear of failure kills learning. Organizations must become safe places to test theories.

**The transformation:**

Management stops being about:
- Motivating people → Creating systems that don't demotivate
- Judging performance → Understanding system capability
- Individual accountability → Shared aim and cooperation
- Competition → Learning together

Management becomes about:
- Removing barriers to pride in workmanship
- Creating systems where people can contribute
- Building trust and driving out fear
- Fostering joy in work and continuous learning

**The Complete Picture:**

Now you can see how all four lenses work together:

1. **Systems thinking** shows you that results come from interdependence, not individuals
2. **Knowledge of variation** shows you not to tamper, not to over-react, not to rank
3. **Theory of knowledge** shows you how to learn and improve systematically
4. **Psychology** shows you that people want to contribute—if we create the conditions

This is Deming's System of Profound Knowledge. This is how you see through the Management Matrix.

**You don't need to be an expert in all four areas.** But you need to:
- Know these lenses exist
- Begin studying them
- Apply them to what you see every day
- Continuously deepen your understanding

The more you use these lenses, the more clearly you'll see. What once seemed normal will look absurd. What once seemed impossible will become obvious.

## Reflection Questions
1. How does your organization's culture support or undermine intrinsic motivation?
2. If you could remove one source of fear from your workplace, what would it be? What would change?

## Final Challenge
Now that you've completed this seven-day journey, choose one thing:
- One faulty practice to stop
- One system to better understand
- One theory to test
- One source of fear to address

Take the red pill. Start seeing differently. Begin the transformation.

## What's Next?

This seven-day plan is just the beginning. Deming's thinking is deep, and mastery takes years. But you now have the framework.

**To go deeper:**
- Study Deming's books (*Out of the Crisis*, *The New Economics*)
- Learn about PDSA and statistical thinking
- Connect with others on this journey
- Most importantly: Practice. Apply these lenses daily.

Welcome to the real world.
EOF

echo ""
echo "All daily markdown files created!"
echo ""

# Create READMEs
cat > content/README.md << 'EOF'
# Content Directory

This directory contains all reading plans and content for The Daily Digestible Deming.

## Structure

```
content/
├── reading-plans/
│   └── [plan-name]/
│       ├── metadata.json
│       ├── day-1.md
│       ├── day-2.md
│       └── ...
└── README.md
```

## Adding New Reading Plans

1. Create a new folder under `reading-plans/` with a URL-friendly name
2. Add a `metadata.json` file with plan details
3. Create individual markdown files for each day (day-1.md, day-2.md, etc.)
EOF

cat > content/reading-plans/README.md << 'EOF'
# Reading Plans

Each reading plan is a guided journey through Deming's principles and practices.

## Available Plans

### Unplugging from the Management Matrix
A 7-day introduction to Deming's System of Profound Knowledge using The Matrix as a metaphor.

**Topics covered:**
- The illusion of traditional management practices
- System of Profound Knowledge overview
- Appreciation for a System
- Knowledge of Variation
- Theory of Knowledge
- Psychology
EOF

echo "README files created!"
echo ""
echo "✅ Setup complete!"
echo ""
echo "Your structure:"
echo "├── content/"
echo "│   ├── reading-plans/"
echo "│   │   └── unplugging-from-the-matrix/"
echo "│   │       ├── metadata.json"
echo "│   │       ├── day-1.md"
echo "│   │       ├── day-2.md"
echo "│   │       ├── day-3.md"
echo "│   │       ├── day-4.md"
echo "│   │       ├── day-5.md"
echo "│   │       ├── day-6.md"
echo "│   │       └── day-7.md"
echo "│   └── README.md"
echo "├── src/"
echo "└── public/"
echo ""
echo "Next steps:"
echo "1. Review the generated files"
echo "2. Commit to git: git add . && git commit -m 'Initial content structure'"
echo "3. Start building the app!"