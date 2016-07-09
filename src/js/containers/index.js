import React from 'react';
import Nav from '../components/navigation';
import SectionCreate from './create-section-container';
import SectionExplore from './explore-section-container';
import SectionPresets from './presets-section-container';
import SectionExport from './export-section-container';
import Footer from '../components/footer-component';

export default class PageWrapper extends React.Component {

  renderPage() {
    switch(this.props.params.pageName) {
      case 'create':
      default:
        return <SectionCreate />;
      case 'explore':
        return <SectionExplore />;
      case 'presets':
        return <SectionPresets />;
      case 'export':
        return <SectionExport />;
    }
  }

  render() {
    return (
      <div>
        <Nav url={this.props.params} />
        <main className='main-content'>
          {this.renderPage()}
        </main>
        {this.props.params.pageName === 'export' ? null : <Footer />}
      </div>
    )
  }
}
