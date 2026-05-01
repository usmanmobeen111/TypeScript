import Counter from "./components/Counter"
import Heading from "./components/Heading"
import List from "./components/List"
import Section from "./components/Section"

function App() {
  return <>
    <Heading title="Hello"/>
    <Section title="This is section title">
      This is a section
    </Section>
    <Counter/>
    <List items={["Hello item 1", "Another item here", "Third on here"]} renderItem={(item: string)=> <span>{item}</span>}/>
  </>
}

export default App
