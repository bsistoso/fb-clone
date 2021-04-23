import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { Feather, MaterialCommunityIcons, AntDesign, SimpleLineIcons, Ionicons, Entypo } from '@expo/vector-icons'

import { users } from './services/data';
export default function App() {
  return (
    <>
      <StatusBar backgroundColor='#FFFFFF' />

      <View style={styles.container}>
        <ScrollView >
          <View style={styles.appBar}>
            <TouchableOpacity>
              <Text style={styles.appBarText}>facebook</Text>
            </TouchableOpacity>
            <View style={styles.appBarRow}>
              <View style={styles.appBarButton}>
                <TouchableOpacity>
                  <Feather name='search' size={25} color='black'
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.appBarButton}>
                <TouchableOpacity>
                  <MaterialCommunityIcons name='facebook-messenger' size={25} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <StatusBar backgroundColor='#FFFFFF' />
      <View>
        <View style={styles.fbMenu}>
          <TouchableOpacity>
            <SimpleLineIcons name="home" size={25} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons name="account-group-outline" size={25} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons name="television-play" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="flag" size={25} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <SimpleLineIcons name="bell" size={25} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="menu-outline" size={25} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.separator} />
      <View style={styles.fbIcons1}>
        <TouchableOpacity>
          <Image
            style={styles.profilePic}
            source={{ uri: 'https://scontent.fmnl4-3.fna.fbcdn.net/v/t1.6435-9/131530478_4982450565162354_1255161216797484493_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGYF87n2MUyrZ3I5cGg5JiY34LQHSckXX7fgtAdJyRdfnEJKj_ZwxkSCRhB8E_VM1Lr6Gsnm8DI6hVMPzc1Hf_w&_nc_ohc=xn4sDSDLtswAX9tpt0h&_nc_ht=scontent.fmnl4-3.fna&oh=43d8abb9e9d6dee7499285941b4d19aa&oe=60A46D03' }}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.inputStyles}
          placeholder="What's on your mind?" />
      </View>
      <View style={styles.divider} />
      <View style={styles.videoContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity>
            <View style={styles.videoRoom}>
              <MaterialCommunityIcons
                name="video-plus"
                size={26}
                color="#E141FC" />
              <Text style={styles.videoText}>Create Room</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.users}>
            <TouchableOpacity>
              <Image
                style={styles.usersAvatar}
                source={{ uri: 'https://scontent.fmnl4-6.fna.fbcdn.net/v/t1.6435-9/156968296_4341626309185761_8698991084307068083_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFrJmpZiNwQQL9PUGzuRxFfAcf-gp3CLecBx_6CncIt548bg-u8O5YYei1sXUGr6SFhuCTpaG-W_FB-KMghbTAE&_nc_ohc=GvtJ5rzN4YQAX_qkAOW&_nc_ht=scontent.fmnl4-6.fna&oh=e67a82301598f4433dd50b8eb7fc7c79&oe=60A2EFEA' }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.users}>
            <TouchableOpacity>
              <Image
                style={styles.usersAvatar}
                source={{ uri: 'https://scontent.fmnl4-5.fna.fbcdn.net/v/t1.6435-9/148858636_4135714269774119_5509851512986658800_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeG-gHv4iP67JKUH9mDLismcl3fAFpvTMjmXd8AWm9MyOXb-U5aAxQ_BL_5URZ9yi0YpxUZo7gKKgnl_ZiYeI8NC&_nc_ohc=6kbZe6p2sH8AX_irVLg&_nc_ht=scontent.fmnl4-5.fna&oh=b706893a8d6734071cb92667c46da9e9&oe=60A34FC0' }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.users}>
            <TouchableOpacity>
              <Image
                style={styles.usersAvatar}
                source={{ uri: 'https://scontent.fmnl4-3.fna.fbcdn.net/v/t1.6435-9/96111024_2872979912821450_5643744360185987072_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGD6kB2vpA-gMBk0loHOKr8-2gLxu0xaOb7aAvG7TFo5qP1piRULDPZYASv8marr1drNSMotVuQmaLgvENSKcVu&_nc_ohc=Zn5yIJRv4LsAX_WUS6-&_nc_ht=scontent.fmnl4-3.fna&oh=f24502dc05ee0bedde5a8bcaeaeec672&oe=60A44EED' }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.users}>
            <TouchableOpacity>
              <Image
                style={styles.usersAvatar}
                source={{ uri: 'https://scontent.fmnl4-4.fna.fbcdn.net/v/t1.18169-9/11038737_1070381752977988_7392568104435150770_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGAgckYP1ssgSMsmJIiKlD-oqFIdO5VqC-ioUh07lWoL_ke3qp1R8p1eKGi7nVTF_wMyMa47N5RR2aVjvu-1LLG&_nc_ohc=YFi_Z48dq8kAX8lZgr2&_nc_ht=scontent.fmnl4-4.fna&oh=db6ca6585c6e4b50572d8171b72b7746&oe=60A2B9E4' }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.users}>
            <TouchableOpacity>
              <Image
                style={styles.usersAvatar}
                source={{ uri: 'https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.6435-9/118123043_3149215905127702_2198842627432419464_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFhI6MqBDGbVO_EmKDrXvPt9uapxW_bxFr25qnFb9vEWtd4_ZNFoxF1gv3bG81ImQu3DIvb70ZifBRj-gtU2J_H&_nc_ohc=PI8rjIpNAQ8AX_6C7Uz&_nc_ht=scontent.fmnl4-2.fna&oh=abcfb360737502b446ccbbe05f1d41e2&oe=60A51119' }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.users}>
            <TouchableOpacity>
              <Image
                style={styles.usersAvatar}
                source={{ uri: 'https://scontent.fmnl4-4.fna.fbcdn.net/v/t31.18172-8/16178375_1808198192762977_3754094045153774590_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=174925&_nc_eui2=AeHB23EwMEjeK1mZqcc-0IvBkG9ZPcJ1j0CQb1k9wnWPQJ6rpcTgDhfIe02r9LiI-Ogr6b0C5_kggsDlRsl6X8ym&_nc_ohc=2G7ABtGVzmsAX_ulr5R&_nc_ht=scontent.fmnl4-4.fna&oh=6551926d00f3caff7eb971c0153d5553&oe=60A36AEC' }}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <View style={styles.divider} />
      <View>
        <ScrollView contentContainerStyle={{paddingBottom:250}}>
          <View style={styles.storyContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator>
              <View style={styles.Card}>
                <Image
                  style={styles.storyCard}
                  source={{ uri: 'https://scontent.fmnl4-3.fna.fbcdn.net/v/t1.6435-9/131530478_4982450565162354_1255161216797484493_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGYF87n2MUyrZ3I5cGg5JiY34LQHSckXX7fgtAdJyRdfnEJKj_ZwxkSCRhB8E_VM1Lr6Gsnm8DI6hVMPzc1Hf_w&_nc_ohc=xn4sDSDLtswAX9tpt0h&_nc_ht=scontent.fmnl4-3.fna&oh=43d8abb9e9d6dee7499285941b4d19aa&oe=60A46D03' }}
                />
                <View style={styles.storyCardUser}>
                  <TouchableOpacity><AntDesign name="plus" size={24} color="#1777f2" /></TouchableOpacity>
                </View>
                <View style={styles.storyCardFooter}>
                  <Text style={styles.storiesText}>Add To Story</Text>
                </View>
              </View>
              <View style={styles.Card}>
                <TouchableOpacity>
                  <View style={styles.storyCard}>
                    <Image
                      style={styles.storyCard}
                      source={{ uri: 'https://scontent.fmnl25-1.fna.fbcdn.net/v/t1.6435-9/90756320_3243877575624464_1997699889072439296_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=e3f864&_nc_eui2=AeG03oD2SSaMNR9IaTTqRsqyYGAC5_6YOVZgYALn_pg5VumCDotcf4Sk9YhdXJVfowY7i_YhsA_h8VLPTxVxwr8d&_nc_ohc=jWPclU_KsMkAX8hpfTK&_nc_ht=scontent.fmnl25-1.fna&oh=50cac4001ad16ab66d47320a0ca5428f&oe=60A7498E' }}
                    />
                    <View style={styles.storyCardUserAvatar}>
                      <Image
                        style={styles.usersAvatar}
                        source={{ uri: 'https://scontent.fmnl4-5.fna.fbcdn.net/v/t1.6435-9/148858636_4135714269774119_5509851512986658800_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeG-gHv4iP67JKUH9mDLismcl3fAFpvTMjmXd8AWm9MyOXb-U5aAxQ_BL_5URZ9yi0YpxUZo7gKKgnl_ZiYeI8NC&_nc_ohc=6kbZe6p2sH8AX_irVLg&_nc_ht=scontent.fmnl4-5.fna&oh=b706893a8d6734071cb92667c46da9e9&oe=60A34FC0' }}
                      />
                    </View>
                    <View style={styles.storyCardFooter}>
                      <Text style={styles.storiesText}>Edmond</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.Card}>
                <TouchableOpacity>
                  <View style={styles.storyCard}>
                    <Image
                      style={styles.storyCard}
                      source={{ uri: 'https://scontent.fmnl25-1.fna.fbcdn.net/v/t1.6435-9/71203495_2906795859335487_4160526526053351424_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=174925&_nc_eui2=AeFDPwKmYc9CC_vXap-ce7nz6_WYuv8M7zfr9Zi6_wzvNxSv5WkjyukCrhe8Yr-ltrRiWD3nWO6RNuP5wtYXD7-h&_nc_ohc=fM3SsTG6AAsAX_iK_i7&_nc_ht=scontent.fmnl25-1.fna&oh=41f12c6092e4f932ea0bc909625af059&oe=60A83046' }}
                    />
                    <View style={styles.storyCardUserAvatar}>
                      <Image
                        style={styles.usersAvatar}
                        source={{ uri: 'https://scontent.fmnl4-6.fna.fbcdn.net/v/t1.6435-9/156968296_4341626309185761_8698991084307068083_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFrJmpZiNwQQL9PUGzuRxFfAcf-gp3CLecBx_6CncIt548bg-u8O5YYei1sXUGr6SFhuCTpaG-W_FB-KMghbTAE&_nc_ohc=GvtJ5rzN4YQAX_qkAOW&_nc_ht=scontent.fmnl4-6.fna&oh=e67a82301598f4433dd50b8eb7fc7c79&oe=60A2EFEA' }}
                      />
                    </View>
                    <View style={styles.storyCardFooter}>
                      <Text style={styles.storiesText}>KC_Dope</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.Card}>
                <TouchableOpacity>
                  <View style={styles.storyCard}>
                    <Image
                      style={styles.storyCard}
                      source={{ uri: 'https://scontent.fmnl25-1.fna.fbcdn.net/v/t1.18169-9/18268254_1275960019190122_588448432396264164_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=19026a&_nc_eui2=AeEVzk1uwGwj7w0jcISToohkn0T_TW7Pq8afRP9Nbs-rxhbBP8Cr5hUn3HBfsy8mk8Kb_oOSDDUDZuSR7eJ51-AU&_nc_ohc=ERS-4NDYrwAAX8Je2Zq&_nc_ht=scontent.fmnl25-1.fna&oh=3a36bc570996ba32b34542d8d9854012&oe=60A7FD11' }}
                    />
                    <View style={styles.storyCardUserAvatar}>
                      <Image
                        style={styles.usersAvatar}
                        source={{ uri: 'https://scontent.fmnl4-3.fna.fbcdn.net/v/t1.6435-9/96111024_2872979912821450_5643744360185987072_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGD6kB2vpA-gMBk0loHOKr8-2gLxu0xaOb7aAvG7TFo5qP1piRULDPZYASv8marr1drNSMotVuQmaLgvENSKcVu&_nc_ohc=Zn5yIJRv4LsAX_WUS6-&_nc_ht=scontent.fmnl4-3.fna&oh=f24502dc05ee0bedde5a8bcaeaeec672&oe=60A44EED' }}
                      />
                    </View>
                    <View style={styles.storyCardFooter}>
                      <Text style={styles.storiesText}>Mika</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.Card}>
                <TouchableOpacity>
                  <View style={styles.storyCard}>
                    <Image
                      style={styles.storyCard}
                      source={{ uri: 'https://scontent.fmnl25-2.fna.fbcdn.net/v/t1.6435-9/62173014_2177918818924087_4309845513684910080_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=0debeb&_nc_eui2=AeHnFHHqbYNGo3oWv34VaNn71WlfCU7M8b7VaV8JTszxvpbcMzw86BZ5koXpqtS1MkdYDKbCj6FPKG2pY2Q2Jk_o&_nc_ohc=g904DV8pR9wAX_aB5GW&_nc_ht=scontent.fmnl25-2.fna&oh=576a2620cef42e48830c9b71540fdbd1&oe=60A78B46' }}
                    />
                    <View style={styles.storyCardUserAvatar}>
                      <Image
                        style={styles.usersAvatar}
                        source={{ uri: 'https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.6435-9/118123043_3149215905127702_2198842627432419464_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFhI6MqBDGbVO_EmKDrXvPt9uapxW_bxFr25qnFb9vEWtd4_ZNFoxF1gv3bG81ImQu3DIvb70ZifBRj-gtU2J_H&_nc_ohc=PI8rjIpNAQ8AX_6C7Uz&_nc_ht=scontent.fmnl4-2.fna&oh=abcfb360737502b446ccbbe05f1d41e2&oe=60A51119' }}
                      />
                    </View>
                    <View style={styles.storyCardFooter}>
                      <Text style={styles.storiesText}>Cherry</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.Card}>
                <TouchableOpacity>
                  <View style={styles.storyCard}>
                    <Image
                      style={styles.storyCard}
                      source={{ uri: 'https://scontent.fmnl25-2.fna.fbcdn.net/v/t1.6435-9/61679668_2155788941137075_4309723102822006784_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeGWhboj216RRLoubYxoqnm8fCzQ42YEjCB8LNDjZgSMICpRnrQXqW3AA5Xx7Havd_7z3InCoDBnZ7j77aONBsXU&_nc_ohc=H1Ha2epM5jgAX9SpUmA&_nc_oc=AQlvpwIpdeG2_IiR9vIdMW-yoIDoUn-V3jHPZWcLdmQF-EpHXTpGsA6g-JLkyvDGgTg&_nc_ht=scontent.fmnl25-2.fna&oh=ee2b9c63a0edac20ce5e3c488321ddef&oe=60A84ED8' }}
                    />
                    <View style={styles.storyCardUserAvatar}>
                      <Image
                        style={styles.usersAvatar}
                        source={{ uri: 'https://scontent.fmnl4-4.fna.fbcdn.net/v/t1.18169-9/11038737_1070381752977988_7392568104435150770_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGAgckYP1ssgSMsmJIiKlD-oqFIdO5VqC-ioUh07lWoL_ke3qp1R8p1eKGi7nVTF_wMyMa47N5RR2aVjvu-1LLG&_nc_ohc=YFi_Z48dq8kAX8lZgr2&_nc_ht=scontent.fmnl4-4.fna&oh=db6ca6585c6e4b50572d8171b72b7746&oe=60A2B9E4' }}
                      />
                    </View>
                    <View style={styles.storyCardFooter}>
                      <Text style={styles.storiesText}>Lawrence</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.Card}>
                <TouchableOpacity>
                  <View style={styles.storyCard}>
                    <Image
                      style={styles.storyCard}
                      source={{ uri: 'https://scontent.fmnl25-2.fna.fbcdn.net/v/t31.18172-8/456134_189367137858160_520593353_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=de6eea&_nc_eui2=AeHPhntpBLGfXP0uWAHfjEJt36UVWHWxwB_fpRVYdbHAH8SgkbkxzMbBgnGvNvO-FyWwXyLDXWwkpdwwdzZA2mhR&_nc_ohc=IwVf_iVTXMQAX9GQWMT&_nc_ht=scontent.fmnl25-2.fna&oh=7aea357d921bf07676f3a00ce5996a74&oe=60A53C7F ' }}
                    />
                    <View style={styles.storyCardUserAvatar}>
                      <Image
                        style={styles.usersAvatar}
                        source={{ uri: 'https://scontent.fmnl4-4.fna.fbcdn.net/v/t31.18172-8/16178375_1808198192762977_3754094045153774590_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=174925&_nc_eui2=AeHB23EwMEjeK1mZqcc-0IvBkG9ZPcJ1j0CQb1k9wnWPQJ6rpcTgDhfIe02r9LiI-Ogr6b0C5_kggsDlRsl6X8ym&_nc_ohc=2G7ABtGVzmsAX_ulr5R&_nc_ht=scontent.fmnl4-4.fna&oh=6551926d00f3caff7eb971c0153d5553&oe=60A36AEC' }}
                      />
                    </View>
                    <View style={styles.storyCardFooter}>
                      <Text style={styles.storiesText}>Carlo</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
          <View style={styles.divider} />
          <View>
            <View style={styles.feed}>
              <View style={styles.feedHeader}>
                <View style={styles.feedRow}>
                  <TouchableOpacity>
                    <Image style={styles.usersAvatar}
                      source={{ uri: 'https://scontent.fmnl4-6.fna.fbcdn.net/v/t1.6435-9/156968296_4341626309185761_8698991084307068083_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFrJmpZiNwQQL9PUGzuRxFfAcf-gp3CLecBx_6CncIt548bg-u8O5YYei1sXUGr6SFhuCTpaG-W_FB-KMghbTAE&_nc_ohc=GvtJ5rzN4YQAX_qkAOW&_nc_ht=scontent.fmnl4-6.fna&oh=e67a82301598f4433dd50b8eb7fc7c79&oe=60A2EFEA' }}
                    />
                  </TouchableOpacity>
                  <View style={{ paddingLeft: 10 }}>
                    <TouchableOpacity>
                      <Text style={styles.feedUser}>KC_Dope</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={styles.feedTime}>9m</Text>
                      <Entypo
                        name='dot-single'
                        size={12}
                        color='#747476'
                      />
                      <Entypo
                        name='globe'
                        size={10}
                        color='#747476'
                      />
                    </View>
                  </View>
                </View>
                <View>
                  <Entypo
                    name='dots-three-horizontal'
                    size={15}
                    color='#222121'
                  />
                </View>
              </View>
              <View>
                <Text style={styles.post}>"Omar Baliw po, pinasa ni Watawat
                Alam mo yung galawan, kami yung 'di maawat
                Sulat lang ng sulat, mulat lang ng mulat
                Tingnan ang resulta, gulat lang ng gulat"
          </Text>
                <Image style={{ height: 300 }}
                  source={{ uri: 'https://i.ytimg.com/vi/a8aK9eEbMnU/maxresdefault.jpg' }}
                />
                <View style={styles.postFooter}>
                  <View style={styles.postFooterCount}>
                    <View style={styles.feedRow}>
                      <View style={styles.postIconCount}>
                        <AntDesign
                          name="like1"
                          size={12}
                          color='#FFFFFF'
                        />
                      </View>
                      <Text style={styles.postTextCount}>88 likes</Text>
                    </View>
                    <Text style={styles.postTextCount}>590 comments</Text>
                  </View>
                  <View style={styles.separator} />
                  <View style={styles.footerMenu}>
                    <View style={styles.button}>
                      <View style={styles.icon}>
                        <AntDesign
                          name="like2"
                          size={20}
                          color='#424040'
                        />
                      </View>
                      <TouchableOpacity>
                        <Text>Like</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.button}>
                      <View style={styles.icon}>
                        <MaterialCommunityIcons
                          name="comment-outline"
                          size={20}
                          color='#424040'
                        />
                      </View>
                      <TouchableOpacity>
                        <Text>Comment</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.button}>
                      <View style={styles.icon}>
                        <MaterialCommunityIcons
                          name="share-outline"
                          size={20}
                          color='#424040'
                        />
                      </View>
                      <TouchableOpacity>
                        <Text>Share</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={styles.divider} />
              </View>
            </View>
          </View>
          <View style={styles.feed}>
            <View style={styles.feedHeader}>
              <View style={styles.feedRow}>
                <TouchableOpacity>
                  <Image style={styles.usersAvatar}
                    source={{ uri: 'https://scontent.fmnl4-5.fna.fbcdn.net/v/t1.6435-9/148858636_4135714269774119_5509851512986658800_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeG-gHv4iP67JKUH9mDLismcl3fAFpvTMjmXd8AWm9MyOXb-U5aAxQ_BL_5URZ9yi0YpxUZo7gKKgnl_ZiYeI8NC&_nc_ohc=6kbZe6p2sH8AX_irVLg&_nc_ht=scontent.fmnl4-5.fna&oh=b706893a8d6734071cb92667c46da9e9&oe=60A34FC0' }}
                  />
                </TouchableOpacity>
                <View style={{ paddingLeft: 10 }}>
                  <TouchableOpacity>
                    <Text style={styles.feedUser}>Edmond</Text>
                  </TouchableOpacity>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.feedTime}>1hr</Text>
                    <Entypo
                      name='dot-single'
                      size={12}
                      color='#747476'
                    />
                    <Entypo
                      name='globe'
                      size={10}
                      color='#747476'
                    />
                  </View>
                </View>
              </View>
              <View>
                <Entypo
                  name='dots-three-horizontal'
                  size={15}
                  color='#222121'
                />
              </View>
            </View>
            <View>
              <Text style={styles.post}>"Umiiyak ka na naman
              'Lang-hiya talaga, wala ka bang ibang alam?
              Namumugtong mga mata
              Kailan pa ba kaya ikaw magsasawa?
              Sa problema na iyong pinapasan
              Hatid sa 'yo ng boyfriend mong hindi mo maintindihan"
          </Text>
              <Image style={{ height: 300 }}
                source={{ uri: 'https://i1.sndcdn.com/artworks-000169130036-zjcmy6-t500x500.jpg' }}
              />
              <View style={styles.postFooter}>
                <View style={styles.postFooterCount}>
                  <View style={styles.feedRow}>
                    <View style={styles.postIconCount}>
                      <AntDesign
                        name="like1"
                        size={12}
                        color='#FFFFFF'
                      />
                    </View>
                    <Text style={styles.postTextCount}>100 likes</Text>
                  </View>
                  <Text style={styles.postTextCount}>2 comments</Text>
                </View>
                <View style={styles.separator} />
                <View style={styles.footerMenu}>
                  <View style={styles.button}>
                    <View style={styles.icon}>
                      <AntDesign
                        name="like2"
                        size={20}
                        color='#424040'
                      />
                    </View>
                    <TouchableOpacity>
                      <Text>Like</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.button}>
                    <View style={styles.icon}>
                      <MaterialCommunityIcons
                        name="comment-outline"
                        size={20}
                        color='#424040'
                      />
                    </View>
                    <TouchableOpacity>
                      <Text>Comment</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.button}>
                    <View style={styles.icon}>
                      <MaterialCommunityIcons
                        name="share-outline"
                        size={20}
                        color='#424040'
                      />
                    </View>
                    <TouchableOpacity>
                      <Text>Share</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.divider} />
            </View>
          </View>
          <View style={styles.feed}>
            <View style={styles.feedHeader}>
              <View style={styles.feedRow}>
                <TouchableOpacity>
                  <Image style={styles.usersAvatar}
                    source={{ uri: 'https://scontent.fmnl4-3.fna.fbcdn.net/v/t1.6435-9/96111024_2872979912821450_5643744360185987072_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGD6kB2vpA-gMBk0loHOKr8-2gLxu0xaOb7aAvG7TFo5qP1piRULDPZYASv8marr1drNSMotVuQmaLgvENSKcVu&_nc_ohc=Zn5yIJRv4LsAX_WUS6-&_nc_ht=scontent.fmnl4-3.fna&oh=f24502dc05ee0bedde5a8bcaeaeec672&oe=60A44EED' }}
                  />
                </TouchableOpacity>
                <View style={{ paddingLeft: 10 }}>
                  <TouchableOpacity>
                    <Text style={styles.feedUser}>Mika</Text>
                  </TouchableOpacity>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.feedTime}>2hrs</Text>
                    <Entypo
                      name='dot-single'
                      size={12}
                      color='#747476'
                    />
                    <Entypo
                      name='globe'
                      size={10}
                      color='#747476'
                    />
                  </View>
                </View>
              </View>
              <View>
                <Entypo
                  name='dots-three-horizontal'
                  size={15}
                  color='#222121'
                />
              </View>
            </View>
            <View>
              <Text style={styles.post}>"Maybe the night holds a little hope for us, dear
              Maybe we might want to settle down, just be near
              Stay together here"
          </Text>
              <Image style={{ height: 300 }}
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM1fPTLTStrI4AHUjya4Q1aoHAFLOO5DTDfw&usqp=CAU' }}
              />
              <View style={styles.postFooter}>
                <View style={styles.postFooterCount}>
                  <View style={styles.feedRow}>
                    <View style={styles.postIconCount}>
                      <AntDesign
                        name="like1"
                        size={12}
                        color='#FFFFFF'
                      />
                    </View>
                    <Text style={styles.postTextCount}>10 likes</Text>
                  </View>
                  <Text style={styles.postTextCount}>90 comments</Text>
                </View>
                <View style={styles.separator} />
                <View style={styles.footerMenu}>
                  <View style={styles.button}>
                    <View style={styles.icon}>
                      <AntDesign
                        name="like2"
                        size={20}
                        color='#424040'
                      />
                    </View>
                    <TouchableOpacity>
                      <Text>Like</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.button}>
                    <View style={styles.icon}>
                      <MaterialCommunityIcons
                        name="comment-outline"
                        size={20}
                        color='#424040'
                      />
                    </View>
                    <TouchableOpacity>
                      <Text>Comment</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.button}>
                    <View style={styles.icon}>
                      <MaterialCommunityIcons
                        name="share-outline"
                        size={20}
                        color='#424040'
                      />
                    </View>
                    <TouchableOpacity>
                      <Text>Share</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.divider} />
            </View>
          </View>
          <View style={styles.feed}>
            <View style={styles.feedHeader}>
              <View style={styles.feedRow}>
                <TouchableOpacity>
                  <Image style={styles.usersAvatar}
                    source={{ uri: 'https://scontent.fmnl4-4.fna.fbcdn.net/v/t1.18169-9/11038737_1070381752977988_7392568104435150770_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGAgckYP1ssgSMsmJIiKlD-oqFIdO5VqC-ioUh07lWoL_ke3qp1R8p1eKGi7nVTF_wMyMa47N5RR2aVjvu-1LLG&_nc_ohc=YFi_Z48dq8kAX8lZgr2&_nc_ht=scontent.fmnl4-4.fna&oh=db6ca6585c6e4b50572d8171b72b7746&oe=60A2B9E4' }}
                  />
                </TouchableOpacity>
                <View style={{ paddingLeft: 10 }}>
                  <TouchableOpacity>
                    <Text style={styles.feedUser}>Lawrence</Text>
                  </TouchableOpacity>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.feedTime}>10m</Text>
                    <Entypo
                      name='dot-single'
                      size={12}
                      color='#747476'
                    />
                    <Entypo
                      name='globe'
                      size={10}
                      color='#747476'
                    />
                  </View>
                </View>
              </View>
              <View>
                <Entypo
                  name='dots-three-horizontal'
                  size={15}
                  color='#222121'
                />
              </View>
            </View>
            <View>
              <Text style={styles.post}>"Kahit san man tayo magpunta
              Iniingatan ang isa't isa
              Sapat na'ng ngiti mo sa umaga
              Sumasalubong sakin nang may yakap pa"
          </Text>
              <Image style={{ height: 300 }}
                source={{ uri: 'https://i.ytimg.com/vi/epY27qa2CRA/maxresdefault.jpg' }}
              />
              <View style={styles.postFooter}>
                <View style={styles.postFooterCount}>
                  <View style={styles.feedRow}>
                    <View style={styles.postIconCount}>
                      <AntDesign
                        name="like1"
                        size={12}
                        color='#FFFFFF'
                      />
                    </View>
                    <Text style={styles.postTextCount}>300 likes</Text>
                  </View>
                  <Text style={styles.postTextCount}>10 comments</Text>
                </View>
                <View style={styles.separator} />
                <View style={styles.footerMenu}>
                  <View style={styles.button}>
                    <View style={styles.icon}>
                      <AntDesign
                        name="like2"
                        size={20}
                        color='#424040'
                      />
                    </View>
                    <TouchableOpacity>
                      <Text>Like</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.button}>
                    <View style={styles.icon}>
                      <MaterialCommunityIcons
                        name="comment-outline"
                        size={20}
                        color='#424040'
                      />
                    </View>
                    <TouchableOpacity>
                      <Text>Comment</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.button}>
                    <View style={styles.icon}>
                      <MaterialCommunityIcons
                        name="share-outline"
                        size={20}
                        color='#424040'
                      />
                    </View>
                    <TouchableOpacity>
                      <Text>Share</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.divider} />
            </View>
          </View>
          <View style={styles.feed}>
            <View style={styles.feedHeader}>
              <View style={styles.feedRow}>
                <TouchableOpacity>
                  <Image style={styles.usersAvatar}
                    source={{ uri: 'https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.6435-9/118123043_3149215905127702_2198842627432419464_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFhI6MqBDGbVO_EmKDrXvPt9uapxW_bxFr25qnFb9vEWtd4_ZNFoxF1gv3bG81ImQu3DIvb70ZifBRj-gtU2J_H&_nc_ohc=PI8rjIpNAQ8AX_6C7Uz&_nc_ht=scontent.fmnl4-2.fna&oh=abcfb360737502b446ccbbe05f1d41e2&oe=60A51119' }}
                  />
                </TouchableOpacity>
                <View style={{ paddingLeft: 10 }}>
                  <TouchableOpacity>
                    <Text style={styles.feedUser}>Cherry</Text>
                  </TouchableOpacity>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.feedTime}>30m</Text>
                    <Entypo
                      name='dot-single'
                      size={12}
                      color='#747476'
                    />
                    <Entypo
                      name='globe'
                      size={10}
                      color='#747476'
                    />
                  </View>
                </View>
              </View>
              <View>
                <Entypo
                  name='dots-three-horizontal'
                  size={15}
                  color='#222121'
                />
              </View>
            </View>
            <View>
              <Text style={styles.post}>"Hello, it's me
              I was wondering if after all these years you'd like to meet
              To go over everything
              They say that time's supposed to heal ya
              But I ain't done much healing"
          </Text>
              <Image style={{ height: 300 }}
                source={{ uri: 'data:image/jpeg;base64,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' }}
              />
              <View style={styles.postFooter}>
                <View style={styles.postFooterCount}>
                  <View style={styles.feedRow}>
                    <View style={styles.postIconCount}>
                      <AntDesign
                        name="like1"
                        size={12}
                        color='#FFFFFF'
                      />
                    </View>
                    <Text style={styles.postTextCount}>10 likes</Text>
                  </View>
                  <Text style={styles.postTextCount}>90 comments</Text>
                </View>
                <View style={styles.separator} />
                <View style={styles.footerMenu}>
                  <View style={styles.button}>
                    <View style={styles.icon}>
                      <AntDesign
                        name="like2"
                        size={20}
                        color='#424040'
                      />
                    </View>
                    <TouchableOpacity>
                      <Text>Like</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.button}>
                    <View style={styles.icon}>
                      <MaterialCommunityIcons
                        name="comment-outline"
                        size={20}
                        color='#424040'
                      />
                    </View>
                    <TouchableOpacity>
                      <Text>Comment</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.button}>
                    <View style={styles.icon}>
                      <MaterialCommunityIcons
                        name="share-outline"
                        size={20}
                        color='#424040'
                      />
                    </View>
                    <TouchableOpacity>
                      <Text>Share</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.divider} />
            </View>
          </View>
          <View style={styles.feed}>
            <View style={styles.feedHeader}>
              <View style={styles.feedRow}>
                <TouchableOpacity>
                  <Image style={styles.usersAvatar}
                    source={{ uri: 'https://scontent.fmnl4-4.fna.fbcdn.net/v/t31.18172-8/16178375_1808198192762977_3754094045153774590_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=174925&_nc_eui2=AeHB23EwMEjeK1mZqcc-0IvBkG9ZPcJ1j0CQb1k9wnWPQJ6rpcTgDhfIe02r9LiI-Ogr6b0C5_kggsDlRsl6X8ym&_nc_ohc=2G7ABtGVzmsAX_ulr5R&_nc_ht=scontent.fmnl4-4.fna&oh=6551926d00f3caff7eb971c0153d5553&oe=60A36AEC' }}
                  />
                </TouchableOpacity>
                <View style={{ paddingLeft: 10 }}>
                  <Text style={styles.feedUser}>Carlo</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity>
                      <Text style={styles.feedTime}>3m</Text>
                    </TouchableOpacity>
                    <Entypo
                      name='dot-single'
                      size={12}
                      color='#747476'
                    />
                    <Entypo
                      name='globe'
                      size={10}
                      color='#747476'
                    />
                  </View>
                </View>
              </View>
              <View>
                <Entypo
                  name='dots-three-horizontal'
                  size={15}
                  color='#222121'
                />
              </View>
            </View>
            <View>
              <Text style={styles.post}>"You can count on me like one, two, three
              I'll be there
              And I know when I need it, I can count on you like four, three, two
              And you'll be there
              'Cause that's what friends are supposed to do, oh, yeah
              Ooh-ooh-ooh-ooh
              Ooh-ooh-ooh-ooh, ooh, yeah, yeah"
          </Text>
              <Image style={{ height: 300 }}
                source={{ uri: 'https://images.news18.com/ibnlive/uploads/2020/10/1602123619_bruno-mars.jpg' }}
              />
              <View style={styles.postFooter}>
                <View style={styles.postFooterCount}>
                  <View style={styles.feedRow}>
                    <View style={styles.postIconCount}>
                      <AntDesign
                        name="like1"
                        size={12}
                        color='#FFFFFF'
                      />
                    </View>
                    <Text style={styles.postTextCount}>29 likes</Text>
                  </View>
                  <Text style={styles.postTextCount}>9 comments</Text>
                </View>
                <View style={styles.separator} />
                <View style={styles.footerMenu}>
                  <View style={styles.button}>
                    <View style={styles.icon}>
                      <AntDesign
                        name="like2"
                        size={20}
                        color='#424040'
                      />
                    </View>
                    <TouchableOpacity>
                      <Text>Like</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.button}>
                    <View style={styles.icon}>
                      <MaterialCommunityIcons
                        name="comment-outline"
                        size={20}
                        color='#424040'
                      />
                    </View>
                    <TouchableOpacity>
                      <Text>Comment</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.button}>
                    <View style={styles.icon}>
                      <MaterialCommunityIcons
                        name="share-outline"
                        size={20}
                        color='#424040'
                      />
                    </View>
                    <TouchableOpacity>
                      <Text>Share</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.divider} />
            </View>
          </View>
          <View style={styles.feed}>
            <View style={styles.feedHeader}>
              <View style={styles.feedRow}>
                <TouchableOpacity>
                  <Image style={styles.usersAvatar}
                    source={{ uri: 'https://scontent.fmnl25-2.fna.fbcdn.net/v/t1.6435-9/131530478_4982450565162354_1255161216797484493_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGYF87n2MUyrZ3I5cGg5JiY34LQHSckXX7fgtAdJyRdfnEJKj_ZwxkSCRhB8E_VM1Lr6Gsnm8DI6hVMPzc1Hf_w&_nc_ohc=xn4sDSDLtswAX9tpt0h&_nc_ht=scontent.fmnl25-2.fna&oh=15b573bc58cabb82e52057c472ec95e0&oe=60A46D03' }}
                  />
                </TouchableOpacity>
                <View style={{ paddingLeft: 10 }}>
                  <TouchableOpacity>
                    <Text style={styles.feedUser}>Nadeth</Text>
                  </TouchableOpacity>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.feedTime}>1m</Text>
                    <Entypo
                      name='dot-single'
                      size={12}
                      color='#747476'
                    />
                    <Entypo
                      name='globe'
                      size={10}
                      color='#747476'
                    />
                  </View>
                </View>
              </View>
              <View>
                <Entypo
                  name='dots-three-horizontal'
                  size={15}
                  color='#222121'
                />
              </View>
            </View>
            <View>
              <Text style={styles.post}>"If I'm a bad person, you don't like me
              Well, I guess I'll make my own way"
          </Text>
              <Image style={{ height: 300 }}
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyFMEvG_Nve5BD8HdxzHIC-dnZ0xKwhK5rA&usqp=CAU' }}
              />
              <View style={styles.postFooter}>
                <View style={styles.postFooterCount}>
                  <View style={styles.feedRow}>
                    <View style={styles.postIconCount}>
                      <AntDesign
                        name="like1"
                        size={12}
                        color='#FFFFFF'
                      />
                    </View>
                    <Text style={styles.postTextCount}>888 likes</Text>
                  </View>
                  <Text style={styles.postTextCount}>999 comments</Text>
                </View>
                <View style={styles.separator} />
                <View style={styles.footerMenu}>
                  <View style={styles.button}>
                    <View style={styles.icon}>
                      <AntDesign
                        name="like2"
                        size={20}
                        color='#424040'
                      />
                    </View>
                    <TouchableOpacity>
                      <Text>Like</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.button}>
                    <View style={styles.icon}>
                      <MaterialCommunityIcons
                        name="comment-outline"
                        size={20}
                        color='#424040'
                      />
                    </View>
                    <TouchableOpacity>
                      <Text>Comment</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.button}>
                    <View style={styles.icon}>
                      <MaterialCommunityIcons
                        name="share-outline"
                        size={20}
                        color='#424040'
                      />
                    </View>
                    <TouchableOpacity>
                      <Text>Share</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.feed}>
            <View style={styles.feedHeader}>
              <View style={styles.feedRow}>
                <TouchableOpacity>
                  <Image style={styles.usersAvatar}
                    source={{ uri: 'https://scontent.fmnl25-2.fna.fbcdn.net/v/t1.6435-9/131530478_4982450565162354_1255161216797484493_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGYF87n2MUyrZ3I5cGg5JiY34LQHSckXX7fgtAdJyRdfnEJKj_ZwxkSCRhB8E_VM1Lr6Gsnm8DI6hVMPzc1Hf_w&_nc_ohc=xn4sDSDLtswAX9tpt0h&_nc_ht=scontent.fmnl25-2.fna&oh=15b573bc58cabb82e52057c472ec95e0&oe=60A46D03' }}
                  />
                </TouchableOpacity>
                <View style={{ paddingLeft: 10 }}>
                  <TouchableOpacity>
                    <Text style={styles.feedUser}>Nadeth</Text>
                  </TouchableOpacity>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.feedTime}>1m</Text>
                    <Entypo
                      name='dot-single'
                      size={12}
                      color='#747476'
                    />
                    <Entypo
                      name='globe'
                      size={10}
                      color='#747476'
                    />
                  </View>
                </View>
              </View>
              <View>
                <Entypo
                  name='dots-three-horizontal'
                  size={15}
                  color='#222121'
                />
              </View>
            </View>
            <View>
              <Text style={styles.post}>"If I'm a bad person, you don't like me
              Well, I guess I'll make my own way"
          </Text>
              <Image style={{ height: 300 }}
                source={{ uri: 'https://scontent.fmnl25-2.fna.fbcdn.net/v/t1.6435-9/42793520_2298636240210480_7658944991154143232_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeEjJekC7uybW4l1v3OzH5fE8mbakUWknA7yZtqRRaScDrdMlibKge7rQA8XwYaQRSaxuErTbo1B_T4I3I2gK9uz&_nc_ohc=KOa1cOK1yPcAX9GuSa2&_nc_ht=scontent.fmnl25-2.fna&oh=c1dba6975e7791cbb367016ba4cdc993&oe=60A65F7A' }}
              />
              <View style={styles.postFooter}>
                <View style={styles.postFooterCount}>
                  <View style={styles.feedRow}>
                    <View style={styles.postIconCount}>
                      <AntDesign
                        name="like1"
                        size={12}
                        color='#FFFFFF'
                      />
                    </View>
                    <Text style={styles.postTextCount}>888 likes</Text>
                  </View>
                  <Text style={styles.postTextCount}>999 comments</Text>
                </View>
                <View style={styles.separator} />
                <View style={styles.footerMenu}>
                  <View style={styles.button}>
                    <View style={styles.icon}>
                      <AntDesign
                        name="like2"
                        size={20}
                        color='#424040'
                      />
                    </View>
                    <TouchableOpacity>
                      <Text>Like</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.button}>
                    <View style={styles.icon}>
                      <MaterialCommunityIcons
                        name="comment-outline"
                        size={20}
                        color='#424040'
                      />
                    </View>
                    <TouchableOpacity>
                      <Text>Comment</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.button}>
                    <View style={styles.icon}>
                      <MaterialCommunityIcons
                        name="share-outline"
                        size={20}
                        color='#424040'
                      />
                    </View>
                    <TouchableOpacity>
                      <Text>Share</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  appBar: {
    height: 80,
    padding: 11,
    paddingTop: 35,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red',

  },
  appBarText: {
    color: '#3a86e9',
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: -0.3,
  },
  appBarRow: {
    flexDirection: 'row'
  },
  appBarButton: {
    width: 35,
    height: 35,
    borderRadius: 21,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16
  },
  inputStyles: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    margin: 10,
    width: 270,
    borderRadius: 40,
    height: 50,
  },
  profilePic: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginLeft: 10,
    top: 10
  },
  fbMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    // backgroundColor: 'yellow'
  },
  fbIcons1: {
    flexDirection: 'row',
    paddingTop: 1,
  },
  divider: {
    height: 9,
    backgroundColor: '#f0f2f5'
  },
  videoContainer: {
    height: 58,
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center'
  },
  videoRoom: {
    width: 115,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#82b1ff',
    padding: 10,
    marginRight: 5,
    top: 5,
    marginLeft: 8
  },
  videoText: {
    color: '#1777f2',
    fontSize: 10,
    paddingLeft: 6
  },
  users: {
    marginRight: 2
  },
  usersAvatar: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginLeft: 5,
    bottom: -1
  },
  storyContainer: {
    height: 192,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'orange',
  },
  Card: {
    height: 170,
    width: 106,
    position: 'relative',
    marginRight: 8,
  },
  storyCard: {
    height: 170,
    width: 100,
    borderRadius: 12,
    marginLeft: 8,
  },
  storyCardUser: {
    position: 'absolute',
    top: 80,
    left: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    width: 39,
    height: 39,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 30
  },
  storyCardFooter: {
    width: 100,
    position: 'absolute',
    bottom: 12,
    left: 9
  },
  storiesText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: 13
  },
  storyCardUserAvatar: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    width: 39,
    height: 39,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8
  },
  feed: {
    // backgroundColor: 'orange',
  },
  feedHeader: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 6,
    padding: 10,
    // backgroundColor: 'yellow'
  },
  feedRow: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  feedUser: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#222122'
  },
  feedTime: {
    fontSize: 9,
    color: '#747476'
  },
  post: {
    fontSize: 12,
    color: '#222122',
    lineHeight: 16,
    padding: 5,
    // backgroundColor: 'red'
  },
  postFooter: {
    padding: 10
  },
  postFooterCount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 9
  },
  postIconCount: {
    backgroundColor: '#1878f3',
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6
  },
  postTextCount: {
    fontSize: 11,
    color: '#424040'
  },
  footerMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 9
  },
  button: {
    flexDirection: 'row'
  },
  icon: {
    marginRight: 6
  },
  text: {
    fontSize: 12,
    color: '#424040'
  },
  separator: {
    height: 2,
    backgroundColor: '#F9F9F9'
  }
});
