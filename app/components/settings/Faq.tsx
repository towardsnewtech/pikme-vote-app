import React, { useState } from 'react';

import {
  SafeAreaView,
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

//import for the animation of Collapse and Expand
import * as Animatable from 'react-native-animatable';

//import for the Accordion view
import Accordion from 'react-native-collapsible/Accordion';
import SettingLayout from '../layout/settingLayout';
import LinearGradient from 'react-native-linear-gradient';

//Dummy content to show
//You can also use dynamic data by calling web service
const CONTENT = [
  {
    title: 'Q. Can i really withdraw my winnings from Gpay?',
    content:
      'Your wallet always reflects your total winnings and loses. So make sure to check out your wallet!',
  },
  {
    title: 'Q. Where can i see my total winnings ?',
    content:
      'Your wallet always reflects your total winnings and loses. So make sure to check out your wallet!',
  },
  {
    title: 'Q. What can be the maximum streak?',
    content:
      'Your wallet always reflects your total winnings and loses. So make sure to check out your wallet!',
  },
  {
    title: 'Q. Is hosting contest paid?',
    content:
      'Your wallet always reflects your total winnings and loses. So make sure to check out your wallet!',
  },
  {
    title: 'Q. Are the votes really authentic?',
    content:
      'Your wallet always reflects your total winnings and loses. So make sure to check out your wallet!',
  },
];

// //To make the selector (Something like tabs)
// const SELECTORS = [
//   { title: 'T&C', value: 0 },
//   { title: 'Privacy Policy', value: 1 },
//   { title: 'Return Policy', value: 2 },
//   { title: 'Reset all' },
// ];

const Faq = ({navigation}: any) => {
  const [activeSections, setActiveSections] = useState<any>([]);
  const [collapsed, setCollapsed] = useState(true);
  const [multipleSelect, setMultipleSelect] = useState(false);

  const toggleExpanded = () => {
    setCollapsed(!collapsed);
  };

  const setSections = (sections: any) => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const renderHeader = (section: any, _ : any, isActive: any) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.headerActive : styles.headerInActive]}
        transition="backgroundColor">
        <LinearGradient 
            style={[styles.headerBorderBackground, isActive ? styles.headerBorderBackgroundActive: {}]}
            end={{x:0, y:1}}
            colors={['#FFFFFF', '#2A3E83' ]}
        >
            <View
                style={[styles.headerContentBackground, isActive ? styles.headerContentBackgroundActive: {}]}
            >
                <Text style={styles.headerText}>{section.title}</Text>
            </View>
        </LinearGradient>
      </Animatable.View>
    );
  };

  const renderContent = (section: any, _: any, isActive: any) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.contentActive : styles.contentInActive]}
        transition="backgroundColor">
        <LinearGradient 
            style={[styles.contentBoderBackground, isActive ? styles.contentBorderBackgroundActive: {}]}
            end={{x:0, y:1}}
            colors={['#FFFFFF', '#2A3E83' ]}
        >
            <View style={[styles.contentBackground, isActive ? styles.contentBackgroundActive : {}]}>
                <Animatable.Text
                    animation={isActive ? 'bounceIn' : undefined}
                    style={{
                        color: '#B9C7D3',
                        fontSize: 15,
                    }}
                >
                    {section.content}
                </Animatable.Text>
            </View>
        </LinearGradient>
      </Animatable.View>
    );
  };

  return (
    <SettingLayout title='FAQ' navigation={navigation}>
        {/*Code for Accordion/Expandable List starts here*/}
        <Accordion
            activeSections={activeSections}
            //for any default active section
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            renderHeader={renderHeader}
            renderContent={renderContent}
            duration={400}
            onChange={setSections}
        />
        <View style={styles.footerView}>
          <Text style={styles.footerText}>Please reach out to <Text style={styles.linkText}>support@pikme.us</Text> so we can further assist you.</Text>
        </View>
        {/*Code for Accordion/Expandable List ends here*/}
        <>
        {/* <Text style={styles.title}>
            Example of Collapsible/Accordion/Expandable List View in React
            Native
          </Text> */}

          {/*Code for Single Collapsible Start*/}
          {/* <TouchableOpacity onPress={toggleExpanded}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Single Collapsible</Text> */}
              {/*Heading of Single Collapsible*/}
            {/* </View>
          </TouchableOpacity> */}
          {/*Content of Single Collapsible*/}
          {/* <Collapsible collapsed={collapsed} align="center">
            <View style={styles.content}>
              <Text style={{ textAlign: 'center' }}>
                This is a dummy text of Single Collapsible View
              </Text>
            </View>
          </Collapsible> */}
          {/*Code for Single Collapsible Ends*/}

          {/* <View style={{ backgroundColor: '#000', height: 1, marginTop: 10 }} />
          <View style={styles.multipleToggle}>
            <Text style={styles.multipleToggle__title}>
              Multiple Expand Allowed?
            </Text>
            <Switch
              value={multipleSelect}
              onValueChange={(multipleSelect) =>
                setMultipleSelect(multipleSelect)
              }
            />
          </View> */}
          {/* <Text style={styles.selectTitle}>
            Please select below option to expand
          </Text> */}

          {/* <View style={styles.selectors}>
            {SELECTORS.map((selector) => (
              <TouchableOpacity
                key={selector.title}
                onPress={() => setSections([selector.value])}
              >
                <View style={styles.selector}>
                  <Text
                    style={
                      activeSections.includes(selector.value) &&
                      styles.activeSelector
                    }>
                    {selector.title}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View> */}
        </>
    </SettingLayout>
  );
};

export default Faq;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    position: 'relative',
    zIndex: 5
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white'
  },
  headerActive: {
  },
  headerInActive: {
    marginBottom: 20
  },
  headerBorderBackground: {
    padding: 2,
    borderRadius: 10,
  },
  headerBorderBackgroundActive: {
    paddingBottom: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  headerContentBackground: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#0d1721',
  },
  headerContentBackgroundActive: {
    paddingBottom: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  contentBoderBackground: {
    paddingLeft: 2,
    paddingRight: 2,
    paddingBottom: 2,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  },
  contentBorderBackgroundActive: {
  },
  contentBackground: {
    padding: 20,
    backgroundColor: '#0d1721',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  },
  contentBackgroundActive: {

  },
  content: {
    marginBottom: 30,
    color: '#B9C7D3',
    backgroundColor: '#0d1721',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  contentActive: {
  },
  contentInActive: {
    marginBottom: 20
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
    textAlign: 'center',
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
  footerView: {
    paddingTop: 100,
  },
  footerText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#5A6781'
  },
  linkText: {
    color: '#1677CF'
  }
});
