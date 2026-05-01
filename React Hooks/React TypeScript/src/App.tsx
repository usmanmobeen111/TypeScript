import Counter from "./components/Counter"
import Heading from "./components/Heading"
import Section from "./components/Section"

function App() {
  return <>
    <Heading title="Hello"/>
    <Section title="This is section title">
      This is a section
    </Section>
    <Counter/>
  </>
}

export default App
